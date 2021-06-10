import React from "react";
import headerStyles from './app-header.module.css';

import AppHeaderItem from "./app-header-item/app-header-item";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
    return (
        <header className={ headerStyles.header }>
            <nav className={ headerStyles.header__nav }>
                <ul className={ headerStyles.header__list }>
                    <AppHeaderItem text="Конструктор">
                        <BurgerIcon type="primary" />
                    </AppHeaderItem>
                    <AppHeaderItem
                        text="Лента заказов">
                        <ListIcon type="secondary"
                                  />
                    </AppHeaderItem>
                    <li className={`mt-4 mb-4 ${headerStyles.header__logo}`}>
                        <a className={ headerStyles.header__link } href=""><Logo/></a>
                    </li>
                    <AppHeaderItem text="Личный кабинет">
                        <ProfileIcon type="secondary" />
                    </AppHeaderItem>
                </ul>
            </nav>
        </header>
    );
}