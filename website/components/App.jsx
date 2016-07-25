import React from 'react'
import NavBar from './NavBar.jsx'
import $ from 'jquery'

export default React.createClass({

  getInitialState(){
    return {
      isMenuOpen: false,
    }
  },

  // Functions for the NavBar

  openIconMenu: function openIconMenu(){
    $('.gn-menu-wrapper').addClass('gn-open-part')
  },

  closeIconMenu: function closeIconMenu(){
    $('.gn-menu-wrapper').removeClass('gn-open-part')
  },

  bodyClick: function bodyClick(){
    this.closeMenu();
    // this.removeEventListener('click', this.bodyClick)
  },

  openMenu: function openMenu(){
    // trigger
    document.addEventListener('click', this.bodyClick)
    $('.gn-icon-menu').addClass('gn-selected')
    
    // menu
    $('.gn-menu-wrapper').addClass('gn-open-all')
    this.setState({isMenuOpen: true})
    this.closeIconMenu();
  },

  closeMenu: function(){
    if (this.isMenuOpen) return;

    document.removeEventListener('click', this.bodyClick)
    $('.gn-icon-menu').removeClass('gn-selected')
    this.setState({isMenuOpen: false})
    $('.gn-menu-wrapper').removeClass('gn-open-all')

    this.closeIconMenu();

  },

  menuToggle: function menuToggle(){
    event.stopPropagation();
    event.preventDefault();
    if (this.state.isMenuOpen){
      this.closeMenu();
    }
    else {
      this.openMenu();
    }
  },

  render: function(){
    return (
      <div>
        <NavBar
          openIconMenu={this.openIconMenu}
          closeIconMenu={this.closeIconMenu}
          bodyClick={this.bodyClick}
          openMenu={this.openMenu}
          closeMenu={this.closeMenu}
          menuToggle={this.menuToggle}
          isMenuOpen={this.state.isMenuOpen}
        />
        <div id="wrapper">
          <div className="header">
            <img id="logo" src="uploads/peacock.png"/>

            <h1>Web Developer</h1>
          </div>
        </div>
      </div>
    );
  }
})