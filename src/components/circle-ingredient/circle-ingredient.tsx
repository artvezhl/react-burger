import React, { FC } from 'react';
import styles from './circle-ingredient.module.css';

type TCircleIngredientProps = {
    name: string;
    url: string;
    index: number;
};

const indexCreator = (index: number): { zIndex: number } => {
    return {
        zIndex: index,
    };
};

const CircleIngredient: FC<TCircleIngredientProps> = ({ name, url, index }) => {
    return (
        <div className={styles.main} style={indexCreator(index)}>
            <img className={styles.image} src={url} alt={name} />
        </div>
    );
};

export default CircleIngredient;
