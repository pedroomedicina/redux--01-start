import {INCREMENT, DECREMENT, ADD, SUBSTRACT} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
        return updateObject(state, {counter: state.counter + 1});
        case DECREMENT:
        return updateObject(state, {counter: state.counter - 1});
        case ADD:
        return updateObject(state, {counter: state.counter + action.value});
        case SUBSTRACT:
        return updateObject(state, {counter: state.counter - action.value});
    };

    return state;
}

export default reducer;