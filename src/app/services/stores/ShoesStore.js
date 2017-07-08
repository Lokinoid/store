import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../AppDispatcher';


class ShoesStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_TODO:
                constole.log('ActionTypes.ADD_TODO');
                return state;

            default:
                return state;
        }
    }

}

export default new ShoesStore();