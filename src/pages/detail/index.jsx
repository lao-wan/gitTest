import React , {Component} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import { withRouter } from 'react-router-dom';
import { 
    DetailWrapper,
    Heder,
    Content
 } from './style';
class Detail extends Component {
    
    render(){
        let {title,content} = this.props
        return (
            <DetailWrapper>
                <Heder>{title}</Heder >
                <Content dangerouslySetInnerHTML={{__html: content}} />
                
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail((new URLSearchParams(this.props.location.search)).get('id'));
        // this.props.match.params.id
    }
};
const mapStateToProps = (state,ownProps) => {
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));