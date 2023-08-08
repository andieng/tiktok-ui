import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/svg';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/assets/images/js';

const cx = classNames.bind(styles);

function Header() {
    return (
        <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <div className={cx('search')}>
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
                        {/* <div className={cx('input-border')}></div> */}
                    </form>
                </div>
                <div>Header</div>
            </div>
        </h2>
    );
}

export default Header;
