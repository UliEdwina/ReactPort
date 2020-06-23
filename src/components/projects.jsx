import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Stonewall 50th</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw2.mp4" type="video/mp4"/>
                                </video>   <p> The New York Public Library displayed art work from the LGBT+ civil rights era. I was tasked with supervising video, editing, and content. </p>
								{/* <div className="project" >
									<div className="desc">
										<div className="con">
                                            
                                         
                                                           
										</div>
									</div>
								</div> */}
							</div>
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Iconoclast</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw3.mp4" type="video/mp4"/>
                                </video>   <p> In my duties as webmaster I was responsible for creating engaging content that conveyed the heart of a NYC boutique gym.</p>
								{/* <div className="project" >
									<div className="desc">
										<div className="con">
                                            
                                         
                                                           
										</div>
									</div>
								</div> */}
							</div>
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Trans Rights</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw4.mp4" type="video/mp4"/>
                                </video>   <p> I was active in creating media in support for our transgender troops. As a veteran myself I my passion for this specific issue is what drew me to Trichome Media, Inc.  </p>
								{/* <div className="project" >
									<div className="desc">
										<div className="con">
                                            
                                         
                                                           
										</div>
									</div>
								</div> */}
							</div>
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Local Talent</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw5.mp4" type="video/mp4"/>
                                </video>   <p> Current event promos has been a central part of my career. </p>
								{/* <div className="project" >
									<div className="desc">
										<div className="con">
                                            
                                         
                                                           
										</div>
									</div>
								</div> */}
							</div>
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">RPDR</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw6.mp4" type="video/mp4"/>
                                </video>   <p> Covering Rupaul's Drag Race is a quintessential part of our content. It was up to me supervise the capture and compliation of short, social-media ready promos.</p>
								
							</div>
							<div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Stonewall 50th</h2>
                            <video className="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                             <source src="images/sw7.mp4" type="video/mp4"/>
                                </video>   <p> The New York Public Library displayed art work from the LGBT+ civil rights era. I was tasked with supervising video, editing, and content. </p>
								{/* <div className="project" >
									<div className="desc">
										<div className="con">
                                            
                                         
                                                           
										</div>
									</div>
								</div> */}
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#cç" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}