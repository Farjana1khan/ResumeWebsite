import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div>
      {/* <h1>About Page</h1> */}
       
    {/* <!-- About Section--> */}
    <section className="page-section bg-about text-white mb-0" 
    id="about">
        <div className="container">
            {/* <!-- About Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-white"
             align="center">About</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon" align="center">
                <i className="fa fa-laptop-code"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- About Section Content--> */}
            <div className="row">
                <div className="col-lg-4 ml-auto">
                    <p className="lead">
                        <span id="pra">Who I Am?</span> <br/>
                        <div id="para">I am Frontend Developer (React JS), and building projects that help
                        humanity around the world, and solutions that make businesses and organizations operate
                        smoothly.</div>
                    </p>
                </div>
                <div className="col-lg-4 mr-auto">
                    <p className="lead">
                        <span id="pra">What Can I do?</span> <br/>
                       <div id="para"> I can comfortably work on frontend jobs using web development tools. In addition to that, I use ReactJS, javaScript
                        Html/Css, Bootstrap and  to create frontend for backend NodeJs and mongoDB databases to Full Stack web applications I have ability to create or work on these technologies.
                   </div> </p>
                </div>
            </div>
           
        </div>
    </section>
    {/* <!-- End of About --> */}
      
      
      </div>
    )
  }
}

export default About;