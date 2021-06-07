import React from "react";
import PropTypes from "prop-types";

import constructorStyles from './burger-constructor.module.css'

import ConstructorList from "./constructor-list/constructor-list";
import ConstructorCart from "./constructor-cart/constructor-cart";

export default function BurgerConstructor({onClick}) {
    return (
        <section className={`${constructorStyles.constructor} mr-5 pt-25 pr-4 pl-4`}>
            <ConstructorList/>
            <ConstructorCart onOpen={ onClick }/>
        </section>
    );
}

BurgerConstructor.propTypes = {
    onClick: PropTypes.func.isRequired,
}