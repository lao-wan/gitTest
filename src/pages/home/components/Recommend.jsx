import React , { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    RecommendItem,
    RecommendWrapper
} from '../style';
class Recommend extends PureComponent {
    render(){
        let {list}=this.props
        console.log(list)
        return (
            <div>
                <RecommendWrapper>
                    {
                        list.map((item,index)=>{
                            
                            return (
                                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                                 </RecommendItem>
                            )
                        })
                    }
                </RecommendWrapper>
            </div>
        )
    }
};
const mapStateToProps = (state,ownProps) =>{
    return {
        list :state.getIn(['home','recommendList'])
    }
};
export default connect(mapStateToProps)(Recommend);