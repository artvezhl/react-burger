import React, {useContext, useEffect} from "react";

import listStyles from './constructor-list.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorContext } from "../../../services/constructorContext";

export default function ConstructorList() {
    const { constructorState, constructorDispatcher } = useContext(ConstructorContext);
    const { ingredients, bunName } = constructorState;

    const [bun] = ingredients.filter(ingredient => ingredient.type === 'bun' && ingredient.name === bunName);

    const cartTotal = (ingredients) => {
        let total = bun.price * 2;
        ingredients.forEach(ingredient => {
            if (ingredient.type !== 'bun') total += ingredient.price;
        });
        constructorDispatcher({
            type: 'total',
            payload: total
        });
    }

    useEffect(() => {
        cartTotal(ingredients);
    }, [ingredients]);

    return (
        <div className={ listStyles.commonList }>
            <article className={listStyles.bothSides}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </article>
            <div className={ listStyles.constructorList }>
                {
                    ingredients.filter(ingredient => ingredient.type !== 'bun').map(ingredient => (
                        <article className={ listStyles.item } key={ingredient._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </article>
                    ))
                }
            </div>
            <article className={listStyles.bothSides}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </article>
        </div>
    )
}
