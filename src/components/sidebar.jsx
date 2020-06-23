import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(public/images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Edwina Ulises, MBA</a></h1>
              <span className="email" ><i className="icon-mail"></i> <a href = "mailto:edwinaulisespro@gmail.com" > edwinaulisespro@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="about">Introduction</a></li>
                  <li><a href="#areas" data-nav-section="areas">Areas Of Expertise</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#Contact" data-nav-section="timeline">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
             
            </nav>
            <div className="colorlib-footer">
             
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
