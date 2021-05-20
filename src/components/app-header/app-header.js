import React from "react";
import headerStyles from './app-header.module.css';

import AppHeaderItem from "./app-header-item/app-header-item";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'


export default class AppHeader extends React.Component {
    render() {
        return (
            <header className={ headerStyles.header }>
                <nav className={ headerStyles.header__nav }>
                    <ul className={ headerStyles.header__list }>
                        <AppHeaderItem text="Конструктор">
                            <BurgerIcon type="primary"/>
                        </AppHeaderItem>
                        <AppHeaderItem text="Лента заказов">
                            <ListIcon type="primary" />
                        </AppHeaderItem>
                        <AppHeaderItem text="Личный кабинет">
                            <ProfileIcon type="primary" />
                        </AppHeaderItem>
                    </ul>
                </nav>
                <div className={ headerStyles.header__logo }>
                    <Logo/>
                </div>
            </header>
        )
    }
}