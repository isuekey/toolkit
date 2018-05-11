
import React from 'react';
import { connect } from 'react-redux';

import * as componentsOfNavbar from './componentsOfNavbar';
import './cssOfNavbar.css';

const storeMapToProps = (state) => {
  console.log('navState changed');
  return {
    appState: state.appReducer
  }
  return {
  }
};

const handlerMapToProps = (dispatch) => {
  return {
  }
}

class pageOfNavbar extends React.Component {
  render() {
    const { appState } = this.props;
    console.log(appState);
    return (
      <div className="pp-navbar-container">
        {Object.keys(appState.appInitData).map((key) => {
          return appState.appInitData[key]
        }).sort((a, b) => {
          return a.seq - b.seq;
        }).map((itemData, index) => {
          switch (itemData.type) {
            case 'img':
            return (
              <componentsOfNavbar.ComponentOfAvatarInNavbar 
                navbarItemData={itemData} 
                key={itemData.src}
              />
            );
            default:
            return (
              <div key={itemData.title}>
                {itemData.title}
              </div>
            );
          }
        })}
      </div>
    )
  }
}

export const PageOfNavbar = connect(storeMapToProps, handlerMapToProps)(pageOfNavbar);
