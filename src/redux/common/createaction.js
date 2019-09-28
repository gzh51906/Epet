import * as type from './actiontype';
import http from '../../http';
import axios from 'axios';
const insert = v => ({
    type: type.INSERT,
    v
})
const random = v => ({
    type: type.RANDOM,
    v
})
export const reg = v => async(dispatch) => {
    const { data } = await http.post("/user/register", v)
    v.token = data.token
    dispatch(insert(v))
}

export const login = v => async(dispatch) => {
    let result
    http.post("/user/login", v)
        .then(res => {
            console.log(res.data)
            result = Promise.resolve(res)
            dispatch(insert(res.data))
        })
        .catch(err => {
            result = Promise.reject(err)
        })
    return result
}
export const findphone = v => async(dispatch) => {
    let result
    await http.post("/user/findphone", { phone: v }).then(res => {
        result = Promise.resolve(res)
    }).catch(err => {
        result = Promise.reject(err)
    })
    return result
}


export const randomz = v => async(dispatch) => {
    const { data } = await axios.get("api/randomz.json")
    let temp = data.sort(() => Math.random() - 0.5)[0]
    dispatch(random(temp))
}