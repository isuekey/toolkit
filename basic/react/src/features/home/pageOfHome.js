
import React from 'react';
import { connect } from 'react-redux';

import * as componentsOfHome from './componentsOfHome';
import { AppApiServiceManager } from '../../service';
import * as homeAction from './action';

import './cssOfHome.css';

const storeMapToProps = (state) => {
  return {
    featuresHomeLoaded: state.featureHomeReducer.featuresHomeLoaded
  };
}

const handlerMapToProps = (dispatch) => {
  const manager = new AppApiServiceManager(dispatch);
  return {
    getHomeDetailData: () => {
      manager.getHomeDetailData(homeAction.featuresHomeLoadingStatus, homeAction.featuresHomeLoaded);
    }
  };
}

class pageOfHome extends React.Component {
  static path = 'home';
  componentDidMount() {
    this.props.getHomeDetailData();
  }

  render() {
    const { match, featuresHomeLoaded } = this.props;
    const homeSectionList = Object.keys(featuresHomeLoaded).map((key) => {
      return {
        anchor: key,
        ...featuresHomeLoaded[key],
      };
    }).sort((a, b) => {
      return a.seq - b.seq;
    });
    return (
      <div className="home-container">
        <div className="home-body-container">
          {homeSectionList.map((sectionItem) => {
            console.log(sectionItem.anchor);
            return (
              <componentsOfHome.ComponentOfHomeSection 
                sectionItem={sectionItem}
                key={sectionItem.anchor}
              />
            );
          })}
        </div>
        <componentsOfHome.ComponentOfHomeFooterContainer
          match={match}
          homeSectionList={homeSectionList}
        />
      </div>
    );
  }
}


export const PageOfHome = connect(storeMapToProps, handlerMapToProps)(pageOfHome);
