import React, {FC, useState} from "react";
import headerStyles from './app-header.module.css';

import AppHeaderItem from "./app-header-item/app-header-item";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useLocation} from "react-router-dom";
import { TLocationState } from "./app-header-types";

const AppHeader:FC = () => {
    const { pathname } = useLocation<TLocationState>();
    const [main, setMainActive] = useState<boolean>(false);
    const [orders, setOrdersActive] = useState<boolean>(false);
    const [profile, setProfileActive] = useState<boolean>(false);

    return (
        <header className={ headerStyles.header }>
            <nav className={ headerStyles.header__nav }>
                <ul className={ headerStyles.header__list }>
                    <AppHeaderItem text="Конструктор" path='/' setHover={setMainActive}>
                        <BurgerIcon type={(pathname === '/') || main ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                    <AppHeaderItem text="Лента заказов" path="/orders" setHover={setOrdersActive}>
                        <ListIcon type={(pathname === '/orders') || orders ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                    <li className={`mt-4 mb-4 ${headerStyles.header__logo}`} >
                        <Link className={ headerStyles.header__link } to="/"><Logo/></Link>
                    </li>
                    <AppHeaderItem text="Личный кабинет" path="/profile" setHover={setProfileActive}>
                        <ProfileIcon type={(pathname === '/profile') || profile ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;
