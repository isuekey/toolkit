import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import * as features from './features';
import { getHomeData } from './service';
import * as appActions from './action';

// import logo from './logo.svg';
import './App.css';

/**
 * 这里经过考虑还是使用直白定义的方式处理
 * 好处是直观，易于推理定位，便于后期归纳处理
 * 弊端是添加页面时需要手动维护
 */

const mapStoreStateToProps = (state) => {
  return {
    appState: state.appReducer
  }
};

const mapHandlerToProps = (dispatch) => {
  return {
    getHomeData: () => {
      dispatch({
        type: appActions.appInitDataLoadingStatus,
        payload: 1
      });
      getHomeData().then((resJson) => {
        dispatch({
          type: appActions.appInitDataLoaded,
          payload: resJson
        })
      }).catch((err) => {
        dispatch({
          type: appActions.appInitDataLoadingStatus,
          payload: -1
        })
      });
    }
  }
}
class app extends Component {
  componentWillMount(){
    this.props.getHomeData();
  }
  render() {
    console.log(this.props);
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

