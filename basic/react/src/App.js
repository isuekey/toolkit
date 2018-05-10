import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import * as features from './features';
import { getHomeData } from './service';

// import logo from './logo.svg';
import './App.css';

/**
 * 这里经过考虑还是使用直白定义的方式处理
 * 好处是直观，易于推理定位，便于后期归纳处理
 * 弊端是添加页面时需要手动维护
 */

const mapStoreStateToProps = (state) => {
  return {

  }
};

const mapHandlerToProps = (dispatch) => {
  return {
    getHomeData: () => {
      getHomeData().then((resJson) => {
        console.log(resJson);
      });
      console.log('dispatch:',dispatch);
    }
  }
}
class app extends Component {
  componentWillMount(){
    console.log(this.props);
    this.props.getHomeData();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-container">
            <Route exact path="/" component={features.PageOfNavbar} />
            <Route path="/:target" component={features.PageOfNavbar} />
            <Switch>
              <Route exact path="/growth" component={features.PageOfGrowth} />
              <Route path="/growth/:info" component={features.PageOfGrowth} />
              <Route exact path="/" component={features.PageOfHome} />
              <Route path="/:unknown" component={features.PageOfHome} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export const App = connect(mapStoreStateToProps, mapHandlerToProps)(app);

