import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { InView } from 'react-intersection-observer';

import {REMOVE_INGREDIENT_DETAILS, SET_INGREDIENT_DETAILS} from "../../../services/actions/ingredient-details";
import { SET_ACTIVE_TAB } from "../../../services/actions/burger-ingredients";
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

    const tabScrollChange = (inView, entry) => {
        if (inView) {
            console.log(inView, entry.target.firstChild.innerHTML);
            dispatch({
                type: SET_ACTIVE_TAB,
                tab: entry.target.firstChild.innerHTML,
            })
        }
    }

    return (
        <div className={`${ingredientStyles.ingredients} mt-10 mb-6 pl-1 pr-1`}> {(
            <>
                <InView as="div" threshold={1} onChange={tabScrollChange}>
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
                </InView>
                <InView as="div" threshold={0.5} onChange={tabScrollChange}>
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
                </InView>
                <InView as="div" threshold={0.2} onChange={tabScrollChange}>
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
                </InView>
            </>
        )}
            { isModalVisible &&
            <Modal title='Детали ингредиента' onClose={ closeModal }>
                <IngredientDetails/>
            </Modal> }
        </div>
    );
}
