import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

export interface PostProps {
    id?: number;
    title: string;
    body: string;
    className: string;
}

export interface ProductProps {
    id?: number;
    title: string;
    price: string;
}

const Post = ({ title, body, className }: PostProps) => (
    <div
        className={cn({
            [styles.post]: true,
            [className]: !!true,
        })}
    >
        <h5 className={styles.postTitle}>{title}</h5>
        <p className={styles.postBody}>{body}</p>
    </div>
);

export default Post;
