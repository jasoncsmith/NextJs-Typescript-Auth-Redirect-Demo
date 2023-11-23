import { createContext, SetStateAction, Dispatch, useContext } from 'react';
import { action, makeObservable, observable, reaction, autorun } from 'mobx';
import { getItem, storeItem, removeItem } from '../../helpers/storage';

type User = string | undefined;

class UserStore {
    constructor() {
        makeObservable(this);
    }

    @observable user?: User;

    @action.bound
    setUser(user: User) {
        this.user = user;
    }

    @action.bound
    removeUser() {
        this.user = undefined;
    }

    @action.bound
    init() {
        const user = getItem('user');
        this.setUser(user);

        autorun(() => {
            if (this.user) {
                storeItem('user', this.user);
            } else {
                removeItem('user');
            }
        });
    }
}

const store = new UserStore();

export default store;
export const UserContext = createContext<UserStore>(store);
export const useUserContext = () => useContext(UserContext);
