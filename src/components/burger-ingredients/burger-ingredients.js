import React from "react";

import { data } from '../../utils/data';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyles from './burger-ingredients.css';
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";

export default class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props);

        this.mealTypes = [ 'Булки', 'Соусы', 'Начинки' ];
    }

    state = {
        activeMeal: 'Булки',
    }

    onTabClick = e => {
        this.setState({
            activeMeal: e.target.textContent,
        })
    }

    render() {
        return (
            <section className={`${ ingredientsStyles.ingredients } solid ml-5 pt-10`}>
                <h2 className="text text_type_main-large dashed pb-2">Соберите бургер</h2>
                <IngredientsTabs
                    meals={ this.mealTypes }
                    activeMeal={ this.state.activeMeal }
                    changeMeal={ this.onTabClick }
                />
                <div className="mt-10 mb-6 pl-1 pr-1">
                    <h4 className="text text_type_main-medium dashed mb-6">Булки</h4>
                    <ul className="dashed" style={{
                        listStyleType: 'none',
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        {
                            data.map(item => {
                                if (item.type === 'bun')
                                return (
                                <li
                                    className="dashed"
                                    key={item._id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        position: "relative"
                                    }}
                                >
                                    <img className="dashed" src={item.image} alt={item.name}/>
                                    <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                        display: "flex",
                                    }}>
                                        <p style={{
                                            margin: 0,
                                            marginRight: 9,
                                        }}>{item.price}  </p>
                                        <CurrencyIcon className="ml-2" type="primary dashed" />
                                    </div>
                                    <p className="text text_type_main-default dashed" style={{
                                        textAlign: "center",
                                        paddingBottom: 24,
                                    }}>{item.name}</p>
                                    <Counter count={1} size="default" style={{
                                        position: 'relative',
                                        top: 0,
                                        bottom: 0,
                                    }} />
                                </li>
                            )
                            return null;
                            })
                        }

                    </ul>
                </div>
                <div className="mt-10 mb-5 pl-1 pr-1">
                    <h4 className="text text_type_main-medium dashed mb-6">Соусы</h4>
                    <ul className="dashed" style={{
                        listStyleType: 'none',
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        {
                            data.map(item => {
                                if (item.type === 'sauce')
                                    return (
                                        <li
                                            className="dashed"
                                            key={item._id}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                position: "relative"
                                            }}
                                        >
                                            <img className="dashed" src={item.image} alt={item.name}/>
                                            <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                                display: "flex",
                                            }}>
                                                <p style={{
                                                    margin: 0,
                                                    marginRight: 9,
                                                }}>{item.price}  </p>
                                                <CurrencyIcon className="ml-2" type="primary dashed" />
                                            </div>
                                            <p className="text text_type_main-default mb-6 dashed" style={{
                                                textAlign: "center",
                                                paddingBottom: 20,
                                            }}>{item.name}</p>
                                            <Counter count={1} size="default" style={{
                                                position: 'relative',
                                                top: 0,
                                                bottom: 0,
                                            }} />
                                        </li>
                                    )
                                return null;
                            })
                        }

                    </ul>
                </div>
                <div className="mt-10 mb-5 pl-1 pr-1">
                    <h4 className="text text_type_main-medium dashed mb-6">Начинки</h4>
                    <ul className="dashed" style={{
                        listStyleType: 'none',
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        {
                            data.map(item => {
                                if (item.type === 'main')
                                    return (
                                        <li
                                            className="dashed"
                                            key={item._id}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                position: "relative"
                                            }}
                                        >
                                            <img className="dashed" src={item.image} alt={item.name}/>
                                            <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                                display: "flex",
                                            }}>
                                                <p style={{
                                                    margin: 0,
                                                    marginRight: 9,
                                                }}>{item.price}  </p>
                                                <CurrencyIcon className="ml-2" type="primary dashed" />
                                            </div>
                                            <p className="text text_type_main-default mb-6 dashed" style={{
                                                textAlign: "center",
                                                paddingBottom: 20,
                                            }}>{item.name}</p>
                                            <Counter count={1} size="default" style={{
                                                position: 'relative',
                                                top: 0,
                                                bottom: 0,
                                            }} />
                                        </li>
                                    )
                                return null;
                            })
                        }

                    </ul>
                </div>
            </section>
        );
    }
}