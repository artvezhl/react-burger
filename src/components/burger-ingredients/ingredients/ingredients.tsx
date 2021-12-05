import React, {FC} from "react";
import {useDispatch} from "react-redux";
import { InView } from 'react-intersection-observer';

import { SET_ACTIVE_TAB } from "../../../services/actions/burger-ingredients";
import ingredientStyles from './ingredients.module.css';
import Ingredient from "../ingredient/ingredient";
import { TIngredientsProps, TTabScrollChange } from "./ingredients-types";

const Ingredients: FC<TIngredientsProps> = ({ data }) => {
    const dispatch = useDispatch();

    const tabScrollChange: TTabScrollChange = (inView, entry) => {
        if (inView) {
            dispatch({
                type: SET_ACTIVE_TAB,
                tab: entry.target.firstChild.innerHTML,
            })
        }
    }

    return (
        <div className={`${ingredientStyles.ingredients} mt-10 mb-6 pl-1 pr-1`}> {(
            <>
                <InView as="div" threshold={0.8} onChange={tabScrollChange}>
                    <h4 className="text text_type_main-medium mb-6">Булки</h4>
                    <ul className={ingredientStyles.ingredients__list}>
                        {data.map(item => {
                            if (item.type !== 'bun') return null;
                            return (<Ingredient
                                key={ item._id }
                                ingredient={ item }
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
                                        />);
                                }
                            )}
                        </ul>
                </InView>
            </>
        )}
        </div>
    );
}

export default Ingredients;
