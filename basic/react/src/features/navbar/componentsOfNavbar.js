
import React from 'react';


export class ComponentOfAvatarInNavbar extends React.PureComponent {
  
  render() {
    const { navbarItemData } = this.props;
    return (
      <div key={navbarItemData.src}>
        {navbarItemData.src}
      </div>
    )
  }
}

