
import React from 'react';


export class PageOfHome extends React.Component {
  static path = 'home';
  render() {
    const { match } = this.props;
    return (
      <div>
        <span>我的首页 {match.params.unknown}</span>
      </div>
    );
  }
}
