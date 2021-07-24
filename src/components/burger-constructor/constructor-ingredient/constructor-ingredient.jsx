import React, {memo, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";

import listStyles from "../constructor-list/constructor-list.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { REMOVE_INGREDIENT, SET_INGREDIENT_INDEX } from "../../../services/actions/constructor-list";
import { DECREASE_INGREDIENT_COUNT } from "../../../services/actions/burger-ingredients";

export const ConstructorIngredient = memo(function ({ ingredient, index, moveCard, findCard, setIngredientsIndex }) {
    // const originalIndex = findCard(ingredient._id).index;
    // const [ingredientId, setIngredientId] = useState(index);
    const cardRef = useRef(null);
    const {_id, name, price, image} = ingredient;
    const dispatch = useDispatch();
    const [, drop] = useDrop({
        accept: 'card',
        hover: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = cardRef.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
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
        }
    })
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return {
                _id,
                index
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: 'item',
    //     item: { _id, originalIndex },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    //     end: (item, monitor) => {
    //         const { _id: droppedId, originalIndex } = item;
    //         const didDrop = monitor.didDrop();
    //         if (!didDrop) {
    //             moveCard(droppedId, originalIndex);
    //         }
    //     },
    // }), [_id, originalIndex, moveCard]);
    //
    // const [, drop] = useDrop(() => ({
    //     accept: 'item',
    //     canDrop: () => false,
    //     hover({ id: draggedId }) {
    //         if (draggedId !== _id) {
    //             const { index: overIndex } = findCard(_id);
    //             moveCard(draggedId, overIndex);
    //         }
    //     },
    // }), [findCard, moveCard]);

    const removeIngredient = (e, id, index) => {
        if (e.target.closest('.constructor-element__action')) {
            dispatch({
                type: REMOVE_INGREDIENT,
                id: id,
                index: index,
            })
            dispatch({
                type: DECREASE_INGREDIENT_COUNT,
                ingredientId: _id,
            })
        }
    }

    useEffect(() => {
        setIngredientsIndex();
    }, [ingredient.index]);

    const opacity = isDragging ? 0 : 1;
    drag(drop(cardRef));

    return (
        // !isDragging &&
            <article
                ref={cardRef}
                // ref={drag}
                style={{opacity}}
                // ref={(node) => drag(drop(node))}
                // index={ingredientId}
                onClick={(e) => removeIngredient(e, _id, index)}
                className={ listStyles.item }
            >
                <DragIcon type="primary" />
                <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                />
            </article>
    );
})