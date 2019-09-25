import * as type from './actiontype';
let defaultState = {
    username: "尊敬的用户",
    password: "",
    token: "",
    phone: "",
    random: ""
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case type.REG:
            return state
        case type.LOGIN:
            return state
        case type.INSERT:
            return {
                ...state,
                token: action.v.token,
                username: action.v.user.username,
                password: action.v.user.password,
                phone: action.v.user.phone,
            }
        case type.RANDOM:
            return {
                ...state,
                random: action.v
            }
        default:
            return state;
    }
}

export default reducer;