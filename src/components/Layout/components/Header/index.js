import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import svg from '~/assets/images/svg';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icon';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={svg.logo} alt="TikTok" />
                </div>

                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            //<div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </PopperWrapper>
                            //</div>
                        )}
                    >
                        <form>
                            <input type="text" placeholder="Search" />
                            <div className={cx('icon-wrapper')}>
                                <ClearIcon />
                                <LoadingIcon />
                            </div>
                            <span className={cx('span-spliter')} />
                            <button className={cx('search-btn')} type="submit">
                                <SearchIcon />
                            </button>
                        </form>
                    </Tippy>
                </div>
                <div>Header</div>
            </div>
        </div>
    );
}

export default Header;
