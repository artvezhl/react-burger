import React from "react";

import constructorStyles from './burger-constructor.module.css'

import { ConstructorList } from "./constructor-list/constructor-list";
import ConstructorCart from "./constructor-cart/constructor-cart";

export default function BurgerConstructor() {
    return (
        <section className={`${constructorStyles.constructor} mr-5 pt-25 pr-4 pl-4`}>
            <ConstructorList />
            <ConstructorCart />
        </section>
    );
}
