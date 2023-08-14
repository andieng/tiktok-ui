import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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

    return (
        <Tippy
            interactive
            offset={[12, 14]}
            visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <Popper>
                    <div className={classes}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory(history.slice(0, -1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </div>
                </Popper>
            )}
            onHide={() => setHistory(history.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
