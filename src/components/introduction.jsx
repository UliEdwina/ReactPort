import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li className = "firstimg" style={{backgroundImage: 'url()'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello! <br />I'm Edwina</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/e/2PACX-1vTloWXqV7ckuIy0H7XfKHTWMYprEXBbqdUDMa0Ht3yl-KSQPHXRVuiM3EMYdjiraYO-ef1734BF2D_r/pub" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(https://cvws.icloud-content.com/B/AYjKzq0YuFWQv-hS45EQs41wOPlmASu_Qn06QGpEn-CF9Uoo2_UjG1EB/img_bg_2.jpg?o=Arjkjku3ZiYDE9UkjzHbFqEEHOeB1dJVN5Qo_s-i7_lH&v=1&x=3&a=CAogqdEh5RC-QC6I3bTgila67zuFJFQBaGamggGwXaovwYMSbxD3u7OSri4Yl7Pqkq4uIgEAUgRwOPlmWgQjG1EBaicdu59WVDeq5IILBcs10Bchvqpq_2axzhjGi3881nma1Wo-P0tjRrRyJ4dkegYz0DazW0IBtw4-687f3FQVt5YeyT_UOPjMBwXW7Bwcwm3eJw&e=1592935487&fl=&r=1f0286f5-1b31-4374-bbf9-c7a48db1ab0e-1&k=S3efTLycVWVZyfDV-Q-B0w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=31&s=hYr4a0ZUGU4VMvvgwaxM0JuTChw&cd=i)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner NYC">
                        <div className="desc ">

                          <h1 >From NYC</h1>
                          <p><a href='/projects'className="btn btn-primary btn-learn"  target="_blank" rel="noopener">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
