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
            <div className="well">
              <h2>Web Developer</h2>
              <p className="headline-paragraph">My name is Kyle Peacock, and I'm a full-stack web developer and branding specialist.
              Node.js, Express, React.js, and Postgresql make my ideas come to life.</p>
            </div>
            <div className="container">
              <h2>
                Javascript
              </h2>
              <p>Today, JavaScript is used in both the web client and on the server. I am experienced in the latest Javascript frameworks, building full-stack applications with React, Angular, Node.js, and Express, with familiarity in some other current frameworks.</p>
              <h2>Adobe Creative Cloud</h2>
              <p>I've been using the Creative Suite since 2006, beginning with Flash animations. Since then, I have used most of the products to some degree or another, but my strongest skills are in Illustrator, Photoshop, Premiere, and Dreamweaver. ​</p>
              <h2>Full Stack</h2>
              <p>Businesses today demand a developer who understands how all the parts of a web application fit together. I can work on any stage of development on a web application, from hosting and database configuration to front-end design frameworks.</p>
              <h2>Project Development</h2>
              <p>Most engineers prefer to focus on programming, and most managers prefer to focus primarily on higher-level issues. I tend to fall somewhere in between. My background in Philosophy, Law, and debate equip me to identify and communicate engineering's needs to upper management.</p>
            </div>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
})