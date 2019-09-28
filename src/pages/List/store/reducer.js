import * as type from './actiontype';
let defaultState = {
    categorys: [],
    index: 0,
    show: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case type.GETCATEGORY:
            return {
                ...state,
                categorys: action.v
            }
        case type.GETSHOWLIST:
            return {
                ...state,
                show: action.v
            }
        case type.CHANGEINDEX:
            return {
                ...state,
                index: action.v
            }
        default:
            return state;
    }
}

export default reducer;