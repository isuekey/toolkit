
import React from 'react';


export class ComponentOfAvatarInNavbar extends React.PureComponent {
  render() {
    const { navbarItemData={}, onClick } = this.props;
    return (
      <div className={"navitem avatar"} key={navbarItemData.src} onClick={onClick}>
        <div>
        <img className={"avatar"} src={navbarItemData.src} alt={navbarItemData.title}/>
        </div>
      </div>
    )
  }
}

export class ComponentOfTabInNavbar extends React.PureComponent {
  render() {
    const { navbarItemData={}, onClick } = this.props;
    return (
      <div className={"navitem"} onClick={onClick}>
        <div>
          <p>{navbarItemData.title}</p>
        </div>
      </div>
    );
  }
}

