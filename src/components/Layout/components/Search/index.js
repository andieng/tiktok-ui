import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchServices';
import AccountItem from '~/components/AccountItem';
import * as Icon from '~/components/Icon';
import Popper from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (debouncedValue) {
            const fetchApi = async () => {
                setLoading(true);
                const result = await searchServices.search(debounced);
                setSearchResult(result);
                setLoading(false);
            };
            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('search')}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <Popper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </div>
                    </Popper>
                )}
                onClickOutside={handleHideResult}
            >
                <form>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                            e.target.value = e.target.value.trimStart();
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    <div className={cx('icon-wrapper')}>
                        {searchValue && !loading && (
                            <button className={cx('clear-btn')} onClick={handleClear}>
                                <Icon.ClearIcon className={cx('icon')} />
                            </button>
                        )}

                        {loading && <Icon.LoadingIcon className={cx('icon', 'loading')} />}
                    </div>
                    <span className={cx('span-spliter')} />
                    <button className={cx('search-btn')} type="submit">
                        <Icon.SearchIcon />
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
