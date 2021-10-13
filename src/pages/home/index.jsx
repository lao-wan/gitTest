import React , {PureComponent} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { actionCreators } from './store'
import {connect} from 'react-redux'
import {
    HomeWraper,
    HomeLeft,
    BackTop,
    HomeRight
} from './style'
class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    
    render(){
        
        return (
            <div>
                <HomeWraper>
                    <HomeLeft>
                      
                        <img src={require('../../statics/img/1.jpg').default} alt="" />
                        <Topic/>
                        <List />
                        
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWraper>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>到顶部</BackTop>:null}
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}
const mapDispatchToProps = (dispatch , ownProps) =>{
    return {
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow(){
           if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true))
           }else{
            dispatch(actionCreators.toggleTopShow(false))
           }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);