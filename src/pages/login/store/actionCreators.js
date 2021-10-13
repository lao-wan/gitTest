import axios from 'axios'
import {CHANGE_LOGIN,CHANGE_LOGOUT} from './constants'
const changeLogin = (value) => {
    return {
        type:CHANGE_LOGIN,
        value
    }
}
export const login = (accout,password) => {
    return (dispatch)=>{
        axios.get(`/api/json/login.json?account=${accout}&password=${password}`)
        .then(res=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin(result))
                
            }else{
                alert('登录失败')
            }
            
        })
        .catch(e=>{
            alert(e.message)
        })
    }
}
export const logout = () => {
    return {
        type:CHANGE_LOGOUT,
        value:false
    }
}