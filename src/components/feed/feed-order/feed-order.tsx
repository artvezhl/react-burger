import React from 'react';

import styles from './feed-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import CircleIngredient from '../../circle-ingredient/circle-ingredient';

const orderNumber = 657438;
const orderDate = 'Сегодня, 16:20 i-GMT+3';
const burgerName = 'Death Star Starship Main бургер';

const saucePic = 'https://code.s3.yandex.net/react/code/sauce-02.png';
const bunPic = 'https://code.s3.yandex.net/react/code/bun-01.png';
const firstMealPic = 'https://code.s3.yandex.net/react/code/meat-01.png';
const secondMealPic = 'https://code.s3.yandex.net/react/code/meat-02.png';
const thirdMealPic = 'https://code.s3.yandex.net/react/code/sp_1.png';
const fourthMealPic = 'https://code.s3.yandex.net/react/code/core.png';

const picName = 'name of pic';

const price = 13425;

export default function FeedOrder() {
    return (
        <div className={`pt-6 pb-6 pl-6 pr-6 mt-5 mr-4 ${styles.main}`}>
            <p className={`text text_type_main-default pb-6 ${styles.order}`}>
                #{orderNumber} <span className={`text_color_inactive ${styles.date}`}>{orderDate}</span>
            </p>
            <h3 className="text text_type_main-medium pb-6">{burgerName}</h3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div className={styles.images}>
                    <CircleIngredient name={picName} url={bunPic} index={6} />
                    <CircleIngredient name={picName} url={saucePic} index={5} />
                    <CircleIngredient name={picName} url={firstMealPic} index={4} />
                    <CircleIngredient name={picName} url={secondMealPic} index={3} />
                    <CircleIngredient name={picName} url={thirdMealPic} index={2} />
                    <CircleIngredient name={picName} url={fourthMealPic} index={1} />
                </div>
                <p
                    className="text text_type_digits-default pl-6"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {price}
                    <span
                        style={{
                            paddingLeft: '9px',
                        }}
                    >
                        <CurrencyIcon type="primary" />
                    </span>
                </p>
            </div>
        </div>
    );
}
