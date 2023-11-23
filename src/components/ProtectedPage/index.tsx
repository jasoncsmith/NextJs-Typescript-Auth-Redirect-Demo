import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUserContext } from '../../context/user';
import useMounted from '@/src/hooks/useMounted';

const ProtectedPage = ({
    component,
}: {
    component: React.ReactNode;
}): React.ReactNode => {
    const isMounted = useMounted();
    const { user } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!isMounted) return;

        if (!user) {
            router.push('/login');
        }
    }, [user, isMounted, router]);

    return !user ? <></> : component;
};

export default observer(ProtectedPage);
