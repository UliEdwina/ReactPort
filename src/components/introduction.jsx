import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                className="firstimg"
                style={{
                  backgroundImage:
                    "url(https://cvws.icloud-content.com/B/AW7vLaPm9X1trlSYHnomKXSV6iEmAYfGy-jRZFSmwbCPxPSc0NGTYnFL/img_bg_1.jpg?o=AufUc1UW8VHwqevjY4SuXHdkXz3-lfDlDDmjPKLtu53O&v=1&x=3&a=CAogppzyYnnWFqqd9JQAPHhrr5ECzIy244N-KGt7adHQ_4ESbxDHvoOSri4Y57W6kq4uIgEAUgSV6iEmWgSTYnFLaie-GSWjib6e-uG8d5-k_7lHYYFz4-0K9Nbp9ul7P9DeEtWFwPi023VyJ_4rsdEVcMjeLZkuIT1W03D9iCgl1syMyJu4LULfIxFIHMFPwqn0jw&e=1592934701&fl=&r=1ba941fd-609e-4aeb-9772-5bf08523d967-1&k=lTp-nZtRk2gD4vrRWwBaXQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=31&s=TIebUn2FnaGGghlbaTLZEsQx3AM&cd=i)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hello! <br />
                            I'm Edwina
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://docs.google.com/document/d/e/2PACX-1vTloWXqV7ckuIy0H7XfKHTWMYprEXBbqdUDMa0Ht3yl-KSQPHXRVuiM3EMYdjiraYO-ef1734BF2D_r/pub"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner NYC">
                        <div className="desc ">
                          <h1>From NYC</h1>
                          <p>
                            <a
                              href="/projects"
                              className="btn btn-primary btn-learn"
                              target="_blank"
                              rel="noopener"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
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
    );
  }
}
