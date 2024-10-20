import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LanguageSection = () => {
  const languages = [
    {
        name: 'Python',
        description:
          'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming.',
      },
      {
        name: 'C#',
        description:
          'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
      },
      {
        name: 'C++',
        description:
          'C++ is used in fields such as system software, game development, embedded systems, scientific computing, and high-performance applications. The C++ standard library provides a range of coding utilities and functions, making it easy to develop complex software systems.',
      },
      {
        name: 'Java',
        description:
          'Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.',
      },
  ];

  const settings = {
    dots : true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>
            Programming <span>Languages</span>
          </h2>
          <br />
        </div>
        <div className="carousel-wrap">
          <Slider {...settings}>
            {languages.map((lang, index) => (
              <div className="item" key={index}>
                <div className="box">
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>{lang.name}</h6>
                        <p>About {lang.name}</p>
                      </div>
                    </div>
                    <p>{lang.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
