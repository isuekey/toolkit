
import React from 'react';




export class PageOfGrowth extends React.Component {
  render() {
    const { match } = this.props;
    // console.log(this.props);
    return (
      <div>
        个人成长{match.params.info}
      </div>
    )
  }
}