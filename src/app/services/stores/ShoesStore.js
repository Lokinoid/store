import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../actions/ActionTypes';


class ShoesStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                console.log('ActionTypes.ADD_TODO', state, action);
                const items = action.data.map(item => [item.id, item]);
                return Immutable.OrderedMap(items);

            default:
                return state;
        }
    }

}

export default new ShoesStore();