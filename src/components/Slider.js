import React, { useState } from 'react';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="Home" className="slider_section">
      <div id="customCarousel1" className="carousel slide">
        <div className="carousel-inner">
          {/* Full-stack Development */}
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Full-stack <br />Development</h1>
                    <p>
                    Full-stack development refers to the practice of designing, building, and maintaining the entire software stack of a web application. This includes both the frontend (client-side) and backend (server-side) components, as well as the database and any other necessary infrastructure. A full-stack developer is someone who has expertise in working with both the frontend and backend technologies, allowing them to handle all aspects of web application development.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt="Full-stack Development" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Front-end Development */}
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Front-end <br />Development</h1>
                    <p>
                    Front-end development is the process of designing and implementing the user interface (UI) and user experience (UX) of a web application. It involves creating visually appealing and interactive elements that users interact with directly. The primary technologies and concepts associated with front-end development include: HTML, CSS, and JavaScript.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt="Front-end Development" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back-end Development */}
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Back-end <br />Development</h1>
                    <p>
                    Back-end development involves building the server-side logic and database components of a web application. It is responsible for processing user requests, managing data, and ensuring the overall functionality of the application. Key aspects of back-end development include Server, Databases, APIs, and Programming Languages like Python.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt="Back-end Development" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <ol className="carousel-indicators">
          <li
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => handleIndicatorClick(0)}
          ></li>
          <li
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => handleIndicatorClick(1)}
          ></li>
          <li
            className={activeIndex === 2 ? 'active' : ''}
            onClick={() => handleIndicatorClick(2)}
          ></li>
        </ol>
      </div>
    </section>
  );
}

export default Slider;