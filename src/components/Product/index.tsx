import { observer } from 'mobx-react';
import styles from './index.module.scss';

const Product = (props: any) => {
    return (
        <div className={styles.product}>
            <span>{props.title}</span>:&nbsp;&nbsp;<span>${props.price}</span>
        </div>
    );
};

export default observer(Product);
