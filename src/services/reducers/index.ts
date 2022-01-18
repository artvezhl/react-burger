import { combineReducers } from 'redux';

import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './constructor-list';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from './order-details';
import { authReducer } from './auth';
import { wsFeedReducer } from './wsFeedReducer';
import { wsUserFeedReducer } from './wsUserFeedReducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: constructorReducer,
    details: ingredientDetailsReducer,
    order: orderDetailsReducer,
    auth: authReducer,
    feed: wsFeedReducer,
    userFeed: wsUserFeedReducer,
});
