'use client';

import styles from './page.module.css';
import { useLocalState } from '../context/LocalStateContext';

export default function App(): JSX.Element {
    const { user } = useLocalState();

    return (
        <main>
            <h2 className={styles.title}>
                Welcome <strong>{user}</strong>!
            </h2>
        </main>
    );
}
