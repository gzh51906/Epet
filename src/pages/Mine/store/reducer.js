import * as type from './actiontype';
let defaultState = {
    list: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case type.INSERTDD:
            return {
                ...state,
                list: action.v
            }
        default:
            return state;
    }
}

export default reducer;