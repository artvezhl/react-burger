import React, {useEffect} from "react";
import { useSelector } from "react-redux";

import constructorStyles from './burger-constructor.module.css'

import ConstructorList from "./constructor-list/constructor-list";
import ConstructorCart from "./constructor-cart/constructor-cart";

export default function BurgerConstructor() {
    const ingredients = useSelector(state => state.burger.ingredients);

    useEffect(() => {
        console.log(ingredients);
    }, [])

    return (
        <section className={`${constructorStyles.constructor} mr-5 pt-25 pr-4 pl-4`}>
            <ConstructorList ingredients={ ingredients } />
            <ConstructorCart />
        </section>
    );
}