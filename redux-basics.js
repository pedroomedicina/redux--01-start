//importing redux with npm syntax
const redux = require('redux');
//setting method to a later call
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
            return {
                ...state,
                counter: state.counter + action.value
            }
    }

    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

//Dispatching Action(s)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER',/*any other value*/ value: 10});
console.log(store.getState());