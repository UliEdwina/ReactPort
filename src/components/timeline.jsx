import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
               
                <h2 className="colorlib-heading animate-box">Professional History</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web-Master/ Blogger Iconoclast Fitness<span>2019-2020</span></h2>
                        <p>I have a long business relationship with Ngo Okafor. I have written contracted work for him in the past and when our paths crossed during a fundraiser he asked me to come blog and webmaster for his boutique Manhattan-based gym Iconoclast fitness. It's been so rewarding to see his business grow and to engage the incredible audience that follows his work as a fitness guru</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><span>Trichome Media Director Of Operations 2018-2020</span></h2>
                        <p> I was lucky enough to be involved with an ambitious group of young professionals at Trichome Media Inc, who are curious, gritty, and hard working. At Trichome Media my executive work involved budgetary organization, as well as general overview of the processes involved in data-collection customer engagement. Growth and charting a path forward for the team was also part of my work. And I continue to serve as a tech consultant.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Higher Education </h2>
                        <p>I have completed a Bachelors In Film And Video from a small art school in Chicago, Columbia College. I have been lucky enough to use the skills that I developed there in the work that I do now as a motion graphics supervisor for advertisement, and copy editor for various articles. Recently I have finished a code-immersives program which I started after completing my MBA from American Public University. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
