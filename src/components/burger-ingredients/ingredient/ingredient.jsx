import React, {useRef, useEffect, useState} from "react";
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";

export default function Ingredient({ ingredient, setDetailsData }) {
    const ingredientRef = useRef(null);
    const [visibleModal, setVisibleModal] = useState(false);

    const openModal = () => {
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
    }

    const modal = (
        <Modal title='Детали ингредиента' onClose={ closeModal }>
            <IngredientDetails {...ingredient} />
        </Modal>
    );


    useEffect(() => {
        const ingrdt = ingredientRef.current;

        ingrdt.addEventListener('click', () => {
            openModal();
        });
        return () => {
            ingrdt.removeEventListener('click', () => {
                openModal();
            });
        }
    })

    return (
        <li ref={ingredientRef} className={ ingredientStyles.ingredient }>
            <img src={ ingredient.image } alt={ ingredient.name }/>
            <div className={`${ ingredientStyles.ingredient__priceWrapper } text text_type_digits-default mt-1 mb-1`}>
                <p className={ ingredientStyles.ingredient__price }>{ ingredient.price }</p>
                <CurrencyIcon className="ml-2" type="primary dashed" />
            </div>
            <p
                className={`text text_type_main-default ${ ingredientStyles.ingredient__name }`}
            >{ ingredient.name }</p>
            <Counter count={1} size="default"/>
            { visibleModal && modal }
        </li>
    );
}

Ingredient.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
}