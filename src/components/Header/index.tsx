import { observer } from 'mobx-react';
import { useUserContext } from '../../context/user';
import styles from './index.module.scss';

interface WelcomeProps {
    userName: string;
}

const Welcome = ({ userName }: WelcomeProps) => (
    <h2 className={styles.headerTitle}>
        Welcome <strong className={styles.strong}>{userName}</strong>!
    </h2>
);

const Header = () => {
    const { user } = useUserContext();

    return (
        <header className={styles.header}>
            {user && <Welcome userName={user} />}
        </header>
    );
};

export default observer(Header);
