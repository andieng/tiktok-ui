import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import svg from '~/assets/images/svg';
import Popper from '~/components/Popper';
import * as Icon from '~/components/Icon';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Icon.LanguageIcon />,
        title: 'English',
    },
    {
        icon: <Icon.HelpIcon />,
        title: 'Feedback and help',
    },
    {
        icon: <Icon.KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

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
                            <Popper>
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </Popper>
                        )}
                    >
                        <form>
                            <input type="text" placeholder="Search" />
                            <div className={cx('icon-wrapper')}>
                                <Icon.ClearIcon />
                                <Icon.LoadingIcon />
                            </div>
                            <span className={cx('span-spliter')} />
                            <button className={cx('search-btn')} type="submit">
                                <Icon.SearchIcon />
                            </button>
                        </form>
                    </Tippy>
                </div>
                <div className={cx('btn-container')}>
                    <Button secondaryOutline large>
                        <Icon.UploadIcon />
                        <span>Upload</span>
                    </Button>
                    <Button primary>
                        <span>Log in</span>
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <div className={cx('more-btn')}>
                            <Icon.EllipsisVerticalIcon />
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
