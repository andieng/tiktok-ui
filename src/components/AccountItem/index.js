import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { VerifiedIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0094032b899e8d5a889f33adb3a828af~c5_300x300.webp?x-expires=1691769600&x-signature=uCeNwjf%2FCSg1E9T3xST%2F488Bcws%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    vietphuongthoa98
                    <span className={cx('verified-container')}>
                        <VerifiedIcon />
                    </span>
                </h4>
                <p className={cx('name')}>Việt Phương Thoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
