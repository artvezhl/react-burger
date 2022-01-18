import React, { FC } from 'react';
import styles from './circle-ingredient.module.css';

export type TCircleIngredientProps = {
    name: string;
    url: string;
    index: number;
    totalIngrds?: number;
};

const indexCreator = (index: number): { zIndex: number } => {
    return {
        zIndex: index,
    };
};

const CircleIngredient: FC<TCircleIngredientProps> = ({ name, url, index, totalIngrds }) => {
    return (
        <div className={styles.main} style={indexCreator(index)}>
            {totalIngrds && (
                <p className={`text text_type_digits-default ${styles.total_ingredients}`}>+{totalIngrds}</p>
            )}
            <img className={totalIngrds ? styles.image_background : styles.image} src={url} alt={name} />
        </div>
    );
};

export default CircleIngredient;
