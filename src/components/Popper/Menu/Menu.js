import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        if (current.title === 'Language') {
            const itemIndex = current.data.findIndex((item) => item.code === current.code);
            current.data.splice(0, 0, current.data.splice(itemIndex, 1)[0]);
        }

        return current.data.map((item, index) => {
            const isParent = Boolean(item.children);
            return (
                <MenuItem
                    key={index}
                    data={item}
                    isSelected={index === 0 && history.length > 1}
                    onClick={() => {
                        if (isParent) {
                            setHistory([...history, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const classes = cx('menu-list', {
        'language-list': current.title === 'Language',
    });

    const handleBack = () => {
        setHistory(history.slice(0, -1));
    };

    const renderResult = (attrs) => (
        <Popper>
            <div className={classes}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </div>
        </Popper>
    );

    // Reset to first page
    const handleResetMenu = () => {
        setHistory(history.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            offset={[12, 14]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
