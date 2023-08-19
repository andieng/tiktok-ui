import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import images from '~/assets/images';
import Button from '~/components/Button';
import * as Icon from '~/components/Icon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Icon.LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            code: 'vi',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
            ],
        },
    },
    {
        icon: <Icon.HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <Icon.KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const isLogin = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <Icon.UserIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <Icon.FavoritesIcon />,
            title: 'Favorites',
            to: '/@hoaa',
        },
        {
            icon: <Icon.CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <Icon.SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <Icon.LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Button smallRounded secondaryOutline large>
                        <Icon.UploadIcon />
                        <span>Upload</span>
                    </Button>
                    {isLogin ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn', 'message-btn')}>
                                    <Icon.MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'inbox-btn')}>
                                    <Icon.InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button smallRounded primary>
                            <span>Log in</span>
                        </Button>
                    )}
                    <Menu items={isLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {isLogin ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1697449646661634.jpeg?x-expires=1692172800&x-signature=Qq29JfIeSaTLVVwXYeFTl%2B6gl%2Bo%3D"
                                alt="Avatar"
                            />
                        ) : (
                            <div className={cx('more-btn')}>
                                <Icon.EllipsisVerticalIcon />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
