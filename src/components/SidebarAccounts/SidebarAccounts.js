import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SidebarAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const data = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7e9c741e0d7c52fc08a3762e01a1265c~c5_100x100.jpeg?x-expires=1692795600&x-signature=7GWPcHuSIh%2BMqdkS9sd5zeXQrqo%3D',
        nickname: 'thao.onha',
        full_name: 'Thảo ở nhà ⋆˚✿˖°',
        tick: false,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c265bd88ee930d30f61772bbae7cbf59~c5_100x100.jpeg?x-expires=1692795600&x-signature=oP4TnxJjiQeuRPKjvMlyTGr3vp8%3D',
        nickname: 'luoxin2001',
        full_name: '洛馨',
        tick: false,
    },
    {
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4f401d232e90a704e74bddeba74c684c~c5_100x100.jpeg?x-expires=1692781200&x-signature=ncEoQtJJx3Caywpo15I0fgJtn6E%3D',
        nickname: 'acupper',
        full_name: 'Amandine Thùy-Trinh ♡',
        tick: true,
    },
];

function SidebarAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItem data={data[0]} />
            <AccountItem data={data[1]} />
            <AccountItem data={data[2]} />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SidebarAccounts;
