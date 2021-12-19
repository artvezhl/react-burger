import React, { memo, useEffect, useRef, FC, SyntheticEvent } from 'react';

import { useDispatch } from '../../../services/hooks';
import { useDrag, useDrop } from 'react-dnd';

import listStyles from '../constructor-list/constructor-list.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DECREASE_INGREDIENT_COUNT, REMOVE_INGREDIENT } from '../../../services/constants';
import { TConstructorIngredient } from './constructor-ingredient-types';

// eslint-disable-next-line react/display-name
export const ConstructorIngredient: FC<TConstructorIngredient> = memo(
    // eslint-disable-next-line react/prop-types
    ({ ingredient, index, moveCard, setIngredientsIndex }) => {
        const cardRef = useRef<HTMLElement>(null);
        // eslint-disable-next-line react/prop-types
        const { _id, name, price, image } = ingredient;
        const dispatch = useDispatch();
        const [, drop] = useDrop({
            accept: 'card',
            hover: (item: { index: number }, monitor) => {
                const dragIndex = item.index;
                const hoverIndex = index;

                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                    return;
                }
                // Determine rectangle on screen
                const hoverBoundingRect: any = cardRef.current?.getBoundingClientRect();
                console.log(hoverBoundingRect);
                // Get vertical middle
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                // Determine mouse position
                const clientOffset:
                    | {
                          x: number;
                          y: number;
                      }
                    | any = monitor.getClientOffset();
                // Get pixels to the top
                const hoverClientY = clientOffset.y - hoverBoundingRect.top;
                // Only perform the move when the mouse has crossed half of the items height
                // When dragging downwards, only move when the cursor is below 50%
                // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }

                moveCard(dragIndex, hoverIndex);

                item.index = hoverIndex;
            },
        });
        const [{ isDragging }, drag] = useDrag({
            type: 'card',
            item: () => {
                return {
                    _id,
                    index,
                };
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        });

        const removeIngredient = (e: SyntheticEvent, id: string, index: number) => {
            const target = e.target as HTMLElement;
            if (target.closest('.constructor-element__action')) {
                dispatch({
                    type: REMOVE_INGREDIENT,
                    id: id,
                    index: index,
                });
                dispatch({
                    type: DECREASE_INGREDIENT_COUNT,
                    ingredientId: _id,
                });
            }
        };

        useEffect(() => {
            setIngredientsIndex();
            // eslint-disable-next-line react/prop-types
        }, [ingredient.index, setIngredientsIndex]);

        const opacity = isDragging ? 0 : 1;
        drag(drop(cardRef));

        return (
            <article
                ref={cardRef}
                style={{ opacity }}
                onClick={(e) => removeIngredient(e, _id, index)}
                className={listStyles.item}
            >
                <DragIcon type="primary" />
                <ConstructorElement text={name} price={price} thumbnail={image} />
            </article>
        );
    },
);
