import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Tabbar from './pages/Tabbar'
import Cart from './pages/Cart'
import Notfound from './pages/Notfound'
import Details from './pages/Details'
import Goodslist from './pages/Goodslist'

class App extends Component {
  render() {
    return (
      <div>

        < Switch >
          <Route path='/cart' component={Cart} />
          <Route path='/tabbar' component={Tabbar} />
          <Route path="/notfound" component={Notfound} />
          <Route path="/details/:id" component={Details} /> 
          <Route path="/Goodslist/" component={Goodslist} /> 
          <Redirect from="/" to="/tabbar/home" exact />
          <Redirect from="/home" to="/tabbar/home" exact />
          <Redirect from="/list" to="/tabbar/list" exact />
          <Redirect from="/mine" to="/tabbar/mine" exact />

          {/* 404 一定要写在最后面*/}
          < Redirect from="*" to="/notfound" />

        </Switch>
      </div>

    )
  }
}



export default App;
