
import React from 'react';
import { connect } from 'react-redux';

import * as componentsOfNavbar from './componentsOfNavbar';
import './cssOfNavbar.css';

const storeMapToProps = (state) => {
  console.log('navState changed');
  return {
    appState: state.appReducer
  }
};

const handlerMapToProps = (dispatch, props) => {
  const { history, match } = props;
  return {
    handlerGotoTargetPage: (navbarItem) => {
      // console.log('next url:' + navbarItem.link);
      const thePageIsCurrentItem = match.url.startsWith(navbarItem.link);
      if (!thePageIsCurrentItem) {
        history.push(navbarItem.link);
      }
    }
  }
}

class pageOfNavbar extends React.Component {
  clickHandlerGenerator = (itemData) => {
    return () => {
      this.props.handlerGotoTargetPage(itemData);
    };
  }
  render() {
    const { appState, match } = this.props;
    console.log(this.props);
    return (
      <div className="pp-navbar-container">
        {Object.keys(appState.appInitData).map((key) => {
          return appState.appInitData[key]
        }).sort((a, b) => {
          return a.seq - b.seq;
        }).map((itemData, index) => {
          let clickHandler = this.clickHandlerGenerator(itemData);
          switch (itemData.type) {
            case 'img':
            return (
              <componentsOfNavbar.ComponentOfAvatarInNavbar 
                navbarItemData={itemData} 
                key={itemData.src}
                onClick={clickHandler}
              />
            );
            default:
            return (
              <componentsOfNavbar.ComponentOfTabInNavbar
                navbarItemData={itemData}
                key={itemData.title}
                onClick={clickHandler}
              />
            );
          }
        })}
      </div>
    )
  }
}

export const PageOfNavbar = connect(storeMapToProps, handlerMapToProps)(pageOfNavbar);
