import React , { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {actionCreators} from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
class List extends PureComponent {
    
    render(){
        let {getMoreList,page}=this.props
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            
                                <NavLink key={index} to={`/detail?id=${item.get('id')}`} >
                            <ListItem >
                <img className='pic' src={item.get('imgUrl')} alt="" />
                <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
            </ListItem></NavLink>
                        )
                    })
                }
                <LoadMore onClick={()=>{getMoreList(page)}}>
                    更多文字
                </LoadMore>
            </div>
        )
    };
    componentDidMount(){
        axios.get('/json')
        .then(res=>{
            console.log(res)
        })
        .catch(e=>alert(e.message))
    }
};
const mapStateToProps = ( state, ownProps ) => {
    return {
        list:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
    }
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(List);