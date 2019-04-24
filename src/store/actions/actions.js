export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
}

export const substract = (value) => {
    return {
        type: SUBSTRACT,
        value: value
    }
}

export const saveResult = ( res ) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const deleteResult = (resultId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resultId
    }
}