import styles from '../../index.module.scss';

const Pager = ({
    page,
    setPage,
    total,
    pageSize,
}: {
    page: number;
    pageSize: number;
    setPage: any;
    total: number;
}) => {
    function next() {
        setPage((page: number) => page + 1);
    }

    function prev() {
        setPage((page: number) => (page === 1 ? 1 : page - 1));
    }

    return (
        <div className={styles.pageButtons}>
            <button
                className={styles.pageButton}
                onClick={prev}
                disabled={page === 1}
            >
                {'<'}
            </button>
            {page}
            <button
                className={styles.pageButton}
                onClick={next}
                disabled={page === total / pageSize}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pager;
