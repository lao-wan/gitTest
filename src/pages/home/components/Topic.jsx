import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { fromJS } from 'immutable'
import { 
    TopicWrapper,
    TopicItem
} from '../style';
class Topic extends PureComponent {
    render(){
        console.log(1,this.props.list)
        return (
            <TopicWrapper>
                
                {
                    this.props.list.map((item)=>{
                        console.log(1,item)
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')}  alt="" />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
};
const mapStateToProps = (state,ownProps)=>{
    return {
        list:state.getIn(['home','topicList'])
    }
};

export default connect(mapStateToProps,null)(Topic);