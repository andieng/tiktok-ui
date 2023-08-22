import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import * as Icon from '~/components/Icon';
import SidebarAccounts from '~/components/SidebarAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<Icon.HomeIcon />}
                    activeIcon={<Icon.HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Icon.PeopleIcon />}
                    activeIcon={<Icon.PeopleActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<Icon.ExploreIcon />}
                    activeIcon={<Icon.ExploreActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<Icon.CameraIcon />}
                    activeIcon={<Icon.CameraActiveIcon />}
                />
            </Menu>
            <SidebarAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
