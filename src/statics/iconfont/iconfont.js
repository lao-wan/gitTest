import {createGlobalStyle} from 'styled-components'
import url1 from './iconfont.woff2?t=1628306100766'
import url2 from './iconfont.woff?t=1628306100766'
import url3 from './iconfont.ttf?t=1628306100766'
export const FontStyle=createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2724498 */
  src: url(${url1}) format('woff2'),
       url(${url2}) format('woff'),
       url(${url3}) format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before {
  content: "\e851";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-fangdajing:before {
  content: "\e6b7";
}

.icon-line-quillpenyumaobi:before {
  content: "\e6eb";
}
`


