import React from 'react';

function About() {
  return (
    <section id="About" className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>About <span>Us</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              {/* Use public folder path without import */}
              <img src="/images/about-img.png" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>Web Development</h3>
              <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
