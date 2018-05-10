
import React from 'react';

import './cssOfHome.css';

export class PageOfHome extends React.Component {
  static path = 'home';
  render() {
    const { match } = this.props;
    return (
      <div className="home-container">
        <span>我的首页 {match.params.unknown}</span>
      </div>
    );
  }
}
