import axios from 'axios'
import * as constants from './constants'
const changeDetail=(title,content)=> {
    return {
        type:constants.CHANNGE_DETAIL,
        title,
        content
    }
}
export const getDetail = (id) => {
    return dispatch=>{
        axios .get('./api/json/detail.json?id='+id)
        .then(
            res=>{
                const reslove=res.data.data
                dispatch(changeDetail(reslove.title,reslove.content))
            }
        )
        .catch(
            e=>alert(e.message)
        );
    }
}