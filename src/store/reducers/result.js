import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), val: action.result * 2})});
        case DELETE_RESULT: return deleteResult(state, action);
    };

    return state;
}

export default reducer;