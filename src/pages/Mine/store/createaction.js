import * as type from './actiontype';
import axios from 'axios';
const insertdd = (v) => ({
    type: type.INSERTDD,
    v
})

export const getdd = () => async(dispatch) => {
    const { data } = await axios.get("api/mine.json")

    dispatch(insertdd(data))
}