import React from 'react';
import './Services.css';


function Services() {
  return (
    <section id="Services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our <span>Services</span></h2>
          <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                {/* Correct image path for GitHub deployment */}
                <img src={process.env.PUBLIC_URL + '/images/s1.png'} alt="Service 1" />
              </div>
              <div className="detail-box">
                <h5>E-commerce Development</h5>
                <p>E-commerce web development is the process of building and designing an e-commerce website where consumers can purchase products online. Because e-commerce websites are so popular with consumers, developing an e-commerce website can help you generate more conversions and revenue for your business.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src={process.env.PUBLIC_URL + '/images/s2.png'} alt="Service 2" />
              </div>
              <div className="detail-box">
                <h5>API Development and Integration</h5>
                <p>API integration refers to the process of connecting two or more applications or systems by using APIs (Application Programming Interfaces) to exchange data and perform actions. APIs are sets of protocols and standards that allow different software applications to communicate with each other.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src={process.env.PUBLIC_URL + '/images/s3.png'} alt="Service 3" />
              </div>
              <div className="detail-box">
                <h5>Web Hosting Services</h5>
                <p>Web hosting is an online service that makes your website’s content accessible on the internet. When you purchase a hosting plan, you are renting space on a physical server to store all the website’s files and data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
