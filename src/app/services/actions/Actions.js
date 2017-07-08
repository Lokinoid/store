import ActionTypes from './ActionTypes';
import AppDispatcher from '../AppDispatcher';


class Actions {
    
    static addItem(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            data,
        });
    }

    static removeItem(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.REMOVE_ITEM,
            id,
        });
    }

    static toggleItem(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_ITEM,
            id,
        });
    }
};

export default Actions;