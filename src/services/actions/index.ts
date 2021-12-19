import { TConstructorListActions } from './constructor-list';
import { TIngredientDetailsActions } from './ingredient-details';

export const RENDER_INGREDIENTS = 'RENDER_INGREDIENTS';
export const GET_TOTAL_AMOUNT = 'GET_TOTAL_AMOUNT';
export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const GET_INGREDIENTS_IDS = 'GET_INGREDIENTS_IDS';

export type TAppActions = TConstructorListActions | TIngredientDetailsActions;
