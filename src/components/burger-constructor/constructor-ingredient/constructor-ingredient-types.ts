import { TIngredient } from '../../burger-ingredients/ingredient/ingredient-types';
import { TMoveCard, TSetIngredientsIndex } from '../constructor-list/constructor-list-types';

export type TConstructorIngredient = {
    readonly ingredient: TIngredient;
    readonly index: number;
    readonly moveCard: TMoveCard;
    readonly setIngredientsIndex: TSetIngredientsIndex;
};
