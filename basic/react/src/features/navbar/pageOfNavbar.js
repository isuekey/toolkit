
import React from 'react';
import { connect } from 'react-redux';

import './cssOfNavbar.css';

const storeMapToProps = (state) => {
  return {
  }
};

const handlerMapToProps = (dispatch) => {
  return {
  }
}

class pageOfNavbar extends React.Component {
  
  componentWillMount() {
    console.log(this.props);
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className="pp-navbar-container">
        导航栏 {match.params.target}
      </div>
    )
  }
}

export const PageOfNavbar = connect(storeMapToProps, handlerMapToProps)(pageOfNavbar);
