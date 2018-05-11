

import React from 'react';


export class LoadingView extends React.Component {
  render() {
    const { className, children, loadingStatus } = this.props
    return (
      <div className={className}>
        { loadingStatus !== 0 ? (<div> loading </div>): (null)}
        { children }
      </div>
    )
  }
}


