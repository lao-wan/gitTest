import React , {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
class Login extends PureComponent {
    render(){
        let {loginStatus}=this.props
       
        if(!loginStatus){
            return (
            
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account=input}} />
                        <Input placeholder='密码' ref={(input)=>{this.password=input}} type='password'/>
                        <Button
                        onClick={()=>{this.props.login(this.account,this.password)}}
                        >登录</Button>
                    </LoginBox>
                   
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
       
    }
};

const mapDispatch = (dispatch , ownProps) => {
    return {
        login(account,password){
            dispatch(actionCreators.login(account.value,password.value))
            console.log(account.value,password.value)
        }
    }
};
const mapStateToProps = (state,ownProps) => {
    return {
        loginStatus:state.getIn(['login','login'])
    }
};
export default connect(mapStateToProps,mapDispatch)(Login);