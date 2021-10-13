import React , {PureComponent} from 'react' ;
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {GlobalStyle} from './style';
import {FontStyle} from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detial from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
class App extends PureComponent{
  render(){
    return (
      <div className='dell'>
        <Provider store={store}>
         
          <BrowserRouter>
          <Header/>
            
              <Route path='/' exact component={Home}/>
              <Route path='/detail' exact component={Detial}/>
              <Route path='/login' component={Login}/>
            <Route path= '/write' component={Write} />
          </BrowserRouter>
        </Provider>
        <FontStyle />
        <GlobalStyle />
      </div>
    )
  }
};
export default App;