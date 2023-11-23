import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { PostProps, ProductProps } from '../../components/Post';
import useSWR from 'swr';
import Product from '@/src/components/Product';
import Pager from './components/Pager';
import Loader from './components/Loader';
import styles from './index.module.scss';
import { postsApi } from './api';

interface ProductsResponse {
    limit: number;
    products?: ProductProps[];
    skip: number;
    total: number;
}

const Component1 = () => {
    const pageSize = 5;
    const [page, setPage] = useState(1);
    const { route, endpoint } = postsApi(pageSize, (page - 1) * pageSize);

    const {
        data,
        isLoading,
    }: {
        data?: ProductsResponse;
        error?: Error;
        isLoading: boolean;
    } = useSWR(route, endpoint, {
        revalidateOnFocus: false,
    });
    console.log(isLoading);

    if (isLoading) <Loader />;

    const { products = [], total }: ProductsResponse =
        data ?? ({} as ProductsResponse);

    return (
        <div className={styles.page}>
            <h1>Component1</h1>
            <Pager
                pageSize={pageSize}
                page={page}
                setPage={setPage}
                total={total}
            />
            {products.map(({ id, title, price }) => (
                <Product
                    key={id}
                    title={title}
                    price={price}
                />
            ))}
        </div>
    );
};

const Component2 = () => {
    const pageSize = 5;
    const [page, setPage] = useState(1);
    const { route, endpoint } = postsApi(pageSize, (page - 1) * pageSize);

    const {
        data,
        isLoading,
    }: {
        data?: ProductsResponse;
        error?: Error;
        isLoading: boolean;
    } = useSWR(route, endpoint, {
        revalidateOnFocus: false,
    });

    if (isLoading) <Loader />;

    const { products = [], total }: ProductsResponse =
        data ?? ({} as ProductsResponse);

    return (
        <div className={styles.page}>
            <h1>Component2</h1>
            <Pager
                pageSize={pageSize}
                page={page}
                setPage={setPage}
                total={total}
            />
            {products.map(({ id, title, price }) => (
                <Product
                    key={id}
                    title={title}
                    price={price}
                />
            ))}
        </div>
    );
};

const Comps = () => {
    return (
        <>
            <h1 className={styles.title}>I dont repaint if cached</h1>
            <Component1 />
            <Component2 />
        </>
    );
};

export default observer(Comps);
