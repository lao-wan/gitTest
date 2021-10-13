import axios from 'axios';
import * as constants from './constants'
import { fromJS } from 'immutable'
const changHomeData = (result) => {
    return {
        type: constants.CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList
    }
}
const addHomeList = (list,nextPage) =>{
    return {
        type:constants.ADD_ARTICLE_LIST,
        list:fromJS(list),
        nextPage
    }
}
export const getHomeInfo = () => {
    return (dispatch)=>{
        axios.get('/api/json/home.json')
        .then(res=>{
            const result= res.data.data;
            dispatch(changHomeData(result))
        })
        .catch(e=>{
            console.log(e.message)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch)=> {
        axios.get(`/api/json/homeList.json?page=${page}`)
        .then((res)=>{
            const result = res.data.data;
            console.log(result)
            dispatch(addHomeList(result,page+1))
        })
        .catch(e=>{
            alert(e.message)
        })
    }
}
export const toggleTopShow = (show) =>{
    return {
        show:show,
        type:constants.TOGGLE_SCROLL_TOP
    }
}