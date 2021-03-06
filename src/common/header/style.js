import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'
export const HeaderWrapper=styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0;
z-index:1;
`
export const Logo = styled.div`
position:absolute;
top:0;
left:0;
display:block;
height:58px;
width:100px;
background:url(${logoPic});
background-size:contain
`
export const Nav = styled.div`
width:960px;
height:100%;
margin:0px auto;
padding-right:70px;
box-sizing:border-box;
`
export const NavItem =styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.active{
    color:#ea6f5a
}
&.right{
    color:#969696;
    float:right;
}
`
export const SearchWrapper = styled.div`
position:relative;
float:left;

.zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
        background:#929292;
        color:#fff;
    }
}
`
export const NavSerach=styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
margin-top:9px;
margin-left:20px;
box-sizing:border-box;
padding:0 30px 0 20px;
font-size:14px;
color:#666;
&::placeholder{
    color:#999;
}
&.focused{
    width:240px;
    
}
/*******以下动画******/
&.slide-enter{
    width:160px;
    transition:all 0.2s ease-out;
}
&.slide-enter-active{
    width:240px;
}
&.slide-exit {
    width:240px;
  }
&.slide-exit-active {
    width:160px;
    transition:all 0.2s ease-out;
  }
/*******以上动画******/
`
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
background:#fff;
box-shadow:0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoSwitch = styled.span`
float:right;
font-size:12px;
cursor:pointer;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-orgin:center center;
}
`
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const SearchInfoItem = styled.a`
display:block;
float:left;
font-size:12px;
line-height:20px;
padding:0 5px;
margin-right:10px;
margin-bottom:15px;
border: 1px solid #ddd;
color:#333;
border-radius:3px;
`
export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
font-size:14px;
line-height:38px;
border-radius:19px;
margin-top:9px;
margin-right:20px;
padding:0 20px;
border:1px solid #ec6149;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149;
}
`
