import React, { FC, useCallback, useMemo } from 'react';

import styles from './feed-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import CircleIngredient from '../../circle-ingredient/circle-ingredient';
import { dataFunc } from '../../../utils';
import { TIngredient } from '../../burger-ingredients/ingredient/ingredient-types';
import { TCircleIngredientProps } from '../../circle-ingredient/circle-ingredient';
import { useSelector } from '../../../services/hooks';

type TFeedOrderProps = {
    readonly number: number;
    readonly name: string;
    readonly date: string;
    readonly ingredientsIDs: Array<string>;
};

const FeedOrder: FC<TFeedOrderProps> = ({ number, name, date, ingredientsIDs }) => {
    const ingredients = useSelector((store) => store.ingredients.ingredients);
    const total = useMemo(() => {
        let result = 0;
        ingredientsIDs.forEach((id) => {
            const currentIgd = ingredients.find((ingredient: TIngredient) => ingredient._id === id);
            // console.log(currentIgd.price);
            if (currentIgd) result += currentIgd.price;
        });
        return result;
    }, [ingredientsIDs]);

    const renderIngredientsImages = useCallback(
        (
            ingredientsArray: Array<TIngredient>,
            ingredientID: string,
            ImageElement: FC<TCircleIngredientProps>,
            index: number,
            ingredientsLength: number,
        ) => {
            const currentIngredient = ingredientsArray.find((ingredient) => ingredient._id === ingredientID);
            // if (currentIngredient) total += currentIngredient.price;
            return currentIngredient && ingredientsLength > 6 && index === 0 ? (
                <ImageElement
                    name={currentIngredient.name}
                    url={currentIngredient.image}
                    index={index}
                    totalIngrds={ingredientsLength - 6}
                    key={index}
                />
            ) : (
                currentIngredient && (
                    <ImageElement
                        name={currentIngredient.name}
                        url={currentIngredient.image}
                        index={index}
                        key={index}
                    />
                )
            );
        },
        [],
    );

    const formatedIngredientsIDs = useCallback(() => {
        const cuttedIDs = [...ingredientsIDs];
        return cuttedIDs.length > 6 ? cuttedIDs.slice(0, 6) : cuttedIDs;
    }, [ingredientsIDs]);

    return (
        <div className={`pt-6 pb-6 pl-6 pr-6 mt-5 mr-4 ${styles.main}`}>
            <p className={`text text_type_main-default pb-6 ${styles.order}`}>
                #{number} <span className={`text_color_inactive ${styles.date}`}>{dataFunc(date)}</span>
            </p>
            <h3 className="text text_type_main-medium pb-6">{name}</h3>
            <div className={styles.content}>
                <div className={styles.images}>
                    {formatedIngredientsIDs()
                        .map((ingredient, id) =>
                            renderIngredientsImages(
                                ingredients,
                                ingredient,
                                CircleIngredient,
                                id,
                                ingredientsIDs.length,
                            ),
                        )
                        .reverse()}
                </div>
                <p className={`text text_type_digits-default pl-6 ${styles.price}`}>
                    {total}
                    <span className={styles.price_icon}>
                        <CurrencyIcon type="primary" />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default FeedOrder;
