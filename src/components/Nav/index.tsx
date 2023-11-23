import NextLink from 'next/link';
import { observer } from 'mobx-react';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

import { MenuItem } from '@mui/material';
import BtnLogout from '../Button/Logout';

import { useUserContext } from '@/src/context/user';
import styles from './index.module.scss';

function Nav(): JSX.Element {
    const currentRoute = usePathname();
    const { user } = useUserContext();

    return (
        <nav className={styles.nav}>
            <NextLink
                className={classnames({
                    [styles.navLink]: true,
                    [styles.navLinkActive]: currentRoute === '/',
                })}
                href={'/'}
            >
                <MenuItem>HOME</MenuItem>
            </NextLink>
            <NextLink
                className={classnames({
                    [styles.navLink]: true,
                    [styles.navLinkActive]: currentRoute === '/posts',
                })}
                href={'/posts'}
            >
                <MenuItem>POSTS</MenuItem>
            </NextLink>

            {user ? (
                <BtnLogout />
            ) : (
                <NextLink
                    className={classnames({
                        [styles.navLink]: true,
                        [styles.navBtnAuthenticate]: true,
                        [styles.navLinkActive]: currentRoute === '/login',
                    })}
                    href={'/login'}
                >
                    <MenuItem>LOGIN</MenuItem>
                </NextLink>
            )}
        </nav>
    );
}

export default observer(Nav);
