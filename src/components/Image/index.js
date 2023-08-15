import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.notFound, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
