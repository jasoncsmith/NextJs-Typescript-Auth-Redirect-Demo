import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@mui/material';
import BtnLogout from './BtnLogout';

const styleNav = {
    display: 'flex',
    justifyContent: 'center',
};

export default function Nav(): JSX.Element {
    const currentRoute = usePathname();

    return (
        <nav style={styleNav}>
            <NextLink
                className={currentRoute == '/' ? 'link--is-active' : ''}
                href={'/'}
            >
                <MenuItem>HOME</MenuItem>
            </NextLink>
            <NextLink
                className={currentRoute == '/posts' ? 'link--is-active' : ''}
                href={'/posts'}
            >
                <MenuItem>POSTS</MenuItem>
            </NextLink>

            <BtnLogout />
        </nav>
    );
}
