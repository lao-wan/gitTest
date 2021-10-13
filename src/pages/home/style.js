import styled from 'styled-components'
export const HomeWraper = styled.div`
width:960px;
overflow:hidden;
margin:0px auto;
// background:red;
`
export const BackTop= styled.div`
position:fixed;
right:30px;
bottom:30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
background:red;
&:hover{
    cursor:pointer;
}
`
export const HomeLeft = styled.div`
margin-left:15px;
padding-top:30px;
width:625px;
float:left;
`
export const HomeRight = styled.div`
width:280px;
float:right;
`
export const TopicWrapper = styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-10px;
border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
float:left;
background:#f7f7f7;
height:32px;
margin-left:18px;
line-height:32px;
font-size:14px;
color:#000;
padding-right:10px;
border:1px solid #dcdcdc;
border-radius:4px;
margin-bottom:18px;
.topic-pic{
    width:32px;
    height:32px;
    display:block;
    float:left;
    margin-right:10px;
    
}
`
export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right;
}
`
export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    font-size:13px;
    line-height:18px;
    color:#999;
}
`
export const LoadMore = styled.div`
width:100%;
height:40px;
margin:30px 0;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
cursor:pointer;
`
/*******Recommend组件*****/
export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;

`

export const RecommendItem = styled.div`
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});

`
/********Writer组件***** */
export const WriterWrapper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
background:#309ffa;
`