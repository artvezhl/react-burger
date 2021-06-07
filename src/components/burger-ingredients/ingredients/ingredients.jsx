import React from "react";
import PropTypes from 'prop-types';

import ingredientStyles from './ingredients.module.css';
import Ingredient from "../ingredient/ingredient";

export default function Ingredients({ data, setDetailsData, openModal }) {
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
                            setDetailsData={setDetailsData}
                            onClick={openModal}
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
                                    setDetailsData={setDetailsData}
                                    onClick={openModal}
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
                                            setDetailsData={setDetailsData}
                                            onClick={openModal}
                                        />);
                                }
                            )}
                        </ul>
            </>
        )}</div>
    );
}

Ingredients.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
    setDetailsData: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
}
