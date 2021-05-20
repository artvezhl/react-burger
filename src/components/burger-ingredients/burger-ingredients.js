import React from "react";

import { data } from '../../utils/data';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export default class BurgerIngredients extends React.Component {
    render() {
        return (
            <section className="solid ml-5 pt-10">
                <h2 className="text text_type_main-large dashed pb-5">Соберите бургер</h2>
                <ul style={{
                    paddingLeft: 0,
                    paddingBottom: 20,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    textAlign: "center",
                }}>
                    <h3 className="text text_type_main-default dashed pt-4 pb-4">Булки</h3>
                    <h3 className="text text_type_main-default dashed pt-4 pb-4">Соусы</h3>
                    <h3 className="text text_type_main-default dashed pt-4 pb-4">Начинки</h3>
                </ul>
                <div className="mt-5 mb-5">
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
                                        alignItems: 'center'
                                    }}
                                >
                                    <img className="dashed" src={item.image} alt={item.name}/>
                                    <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                        display: "flex",
                                    }}>
                                        {item.price}
                                        <CurrencyIcon type="primary dashed" />
                                    </div>
                                    <p className="text text_type_main-default mb-6 dashed" style={{
                                        textAlign: "center"
                                    }}>{item.name}</p>
                                    <Counter count={1} size="default" style={{
                                        position: 'relative',
                                        top: 0,
                                        bottom: 0,
                                    }} />
                                </li>
                            )})
                        }

                    </ul>
                </div>
                <div className="mt-5 mb-5">
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
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img className="dashed" src={item.image} alt={item.name}/>
                                            <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                                display: "flex",
                                            }}>
                                                {item.price}
                                                <CurrencyIcon type="primary dashed" />
                                            </div>
                                            <p className="text text_type_main-default mb-6 dashed" style={{
                                                textAlign: "center"
                                            }}>{item.name}</p>
                                            <Counter count={1} size="default" />
                                        </li>
                                    )})
                        }

                    </ul>
                </div>
                <div className="mt-5 mb-5">
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
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img className="dashed" src={item.image} alt={item.name}/>
                                            <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                                display: "flex",
                                            }}>
                                                {item.price}
                                                <CurrencyIcon type="primary dashed" />
                                            </div>
                                            <p className="text text_type_main-default mb-6 dashed" style={{
                                                textAlign: "center"
                                            }}>{item.name}</p>
                                            <Counter count={1} size="default" />
                                        </li>
                                    )})
                        }

                    </ul>
                </div>
            </section>
        );
    }
}