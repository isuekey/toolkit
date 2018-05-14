
import React from 'react';
import { connect } from 'react-redux';

import * as componentsOfHome from './componentsOfHome';

import './cssOfHome.css';

class pageOfHome extends React.Component {
  static path = 'home';
  render() {
    const { match } = this.props;
    return (
      <div className="home-container">
        <div className="home-body-container">
          <span>我的首页 {match.params.unknown}</span>
        </div>

        <componentsOfHome.ComponentOfHomeFooterContainer />
      </div>
    );
  }
}


export const PageOfHome = connect()(pageOfHome);
