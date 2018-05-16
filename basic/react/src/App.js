import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as features from './features';
import { AppApiServiceManager } from './service';
import * as appActions from './action';
import * as components from './components';

// import logo from './logo.svg';
import './App.css';

/**
 * 这里经过考虑还是使用直白定义的方式处理
 * 好处是直观，易于推理定位，便于后期归纳处理
 * 弊端是添加页面时需要手动维护
 */

const mapStoreStateToProps = (state) => {
  console.log('appState changed');
  return {
    appState: state.appReducer
  }
};

const mapHandlerToProps = (dispatch) => {
  const manager = new AppApiServiceManager(dispatch);
  return {
    getHomeData: () => {
      manager.getHomeData(appActions.appInitDataLoadingStatus, appActions.appInitDataLoaded);
    }
  }
}
class app extends Component {
  componentWillMount() {
    this.props.getHomeData();
  }
  render() {
    const { appState } = this.props;
    return (
      <components.LoadingView className="App" loadingStatus={appState.appInitDataLoadingStatus} >
        <Router>
          <div className="app-container">
            <Route exact path="/" component={features.PageOfNavbar} />
            <Route path="/:target" component={features.PageOfNavbar} />
            <div className="app-content">
              <Switch>
                <Route exact path="/growth" component={features.PageOfGrowth} />
                <Route path="/growth/:info" component={features.PageOfGrowth} />
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={features.PageOfHome} />
                <Route path="/home/:anchor" component={features.PageOfHome} />
              </Switch>
            </div>
          </div>
        </Router>
      </components.LoadingView>
    );
  }
}

export const App = connect(mapStoreStateToProps, mapHandlerToProps)(app);

