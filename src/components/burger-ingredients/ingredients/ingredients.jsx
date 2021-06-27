import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT_DETAILS, SET_INGREDIENT_DETAILS} from "../../../services/actions/ingredient-details";

import ingredientStyles from './ingredients.module.css';
import Ingredient from "../ingredient/ingredient";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

export default function Ingredients({ data }) {
    const [isModalVisible, setVisibleModal] = useState(false);
    const dispatch = useDispatch();

    const openModal = (ingredient) => {
        dispatch({
            type: SET_INGREDIENT_DETAILS,
            details: ingredient,
        })
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
        dispatch({
            type: REMOVE_INGREDIENT_DETAILS,
        })
    }

    return (
        <div className={`${ingredientStyles.ingredients} mt-10 mb-6 pl-1 pr-1`}> {(
            <>
                <h4 className="text text_type_main-medium mb-6">Булки</h4>
                <ul className={ingredientStyles.ingredients__list}>
                    {data.map(item => {
                        if (item.type !== 'bun') return null;
                        return (<Ingredient
                            key={ item._id }
                            ingredient={ item }
                            openModal={ openModal }
                            closeModal={ closeModal }
                        />);
                        }
                    )}
                </ul>
                <h4 className="text text_type_main-medium mb-6">Соусы</h4>
                <ul className={ingredientStyles.ingredients__list}>
                    {data.map(item => {
                            if (item.type !== 'sauce') return null;
                                return (<Ingredient
                                    key={ item._id }
                                    ingredient={ item }
                                    openModal={ openModal }
                                    closeModal={ closeModal }
                                />);
                        }
                    )}
                </ul>
                <h4 className="text text_type_main-medium mb-6">Начинки</h4>
                <ul className={ingredientStyles.ingredients__list}>
                            {data.map(item => {
                                    if (item.type !== 'main') return null;
                                        return (<Ingredient
                                            key={ item._id }
                                            ingredient={ item }
                                            openModal={ openModal }
                                            closeModal={ closeModal }
                                        />);
                                }
                            )}
                        </ul>
            </>
        )}
            { isModalVisible &&
            <Modal title='Детали ингредиента' onClose={ closeModal }>
                <IngredientDetails/>
            </Modal> }
        </div>
    );
}
