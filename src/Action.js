import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increment = (couterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        couterCaption: couterCaption
    })
}

export const decrement = (couterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        couterCaption: couterCaption
    })
}