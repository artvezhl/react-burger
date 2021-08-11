import React from "react";
import headerStyles from './app-header.module.css';

import AppHeaderItem from "./app-header-item/app-header-item";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useLocation} from "react-router-dom";

export default function AppHeader() {
    const { pathname } = useLocation();

    // const onClickHandler = () => console.log(location);

    return (
        <header className={ headerStyles.header }>
            <nav className={ headerStyles.header__nav }>
                <ul className={ headerStyles.header__list }>
                    <AppHeaderItem text="Конструктор">
                        <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                    <AppHeaderItem text="Лента заказов" path="/orders">
                        <ListIcon type={pathname === '/orders' ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                    <li className={`mt-4 mb-4 ${headerStyles.header__logo}`} >
                        <Link className={ headerStyles.header__link } to="/"><Logo/></Link>
                    </li>
                    <AppHeaderItem text="Личный кабинет" path="/profile">
                        <ProfileIcon  type={pathname === '/profile' ? 'primary' : 'secondary'} />
                    </AppHeaderItem>
                </ul>
            </nav>
        </header>
    );
}