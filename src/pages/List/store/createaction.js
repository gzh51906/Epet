import * as type from './actiontype';
import axios from 'axios';
const insertdd = (v) => ({
    type: type.GETCATEGORY,
    v
})
const insertlist = (v) => ({
    type: type.GETSHOWLIST,
    v
})
export const changei = (v) => ({
    type: type.CHANGEINDEX,
    v
})

export const getcategorys = () => async(dispatch) => {
    const { data } = await axios.get("api/categorys/index.json")
    dispatch(insertdd(data.categorys))
}
export const getshowlist = (i) => async(dispatch) => {
    const { data } = await axios.get(`api/categorys/${i}.json`)
    dispatch(insertlist(data.cate_list))
}