import React from 'react';

const WhySection = () => {
  const reasons = [
    {
      img: `${process.env.PUBLIC_URL}/images/w1.png`, 
      title: 'High Demand',
      description:
        'The demand for web developers is already pretty high and it’s only expected to continue rising over the next decade. Driving the demand for web developers is the explosion in Internet usage; it’s currently booming and shows no signs of slowing down any time soon.',
    },
    {
      img: `${process.env.PUBLIC_URL}/images/w2.png`, 
      title: 'Easy to Acquire Skills',
      description:
        'With Web Developers in such high demand, there’s a wide range of resources available to help new learners acquire the skills they need. A few of the most widely used options include paid classes, free video tutorials, and official online documentation provided by programming languages, libraries, and frameworks.',
    },
    {
      img: `${process.env.PUBLIC_URL}/images/w3.png`,
      title: 'High Earning Potential',
      description:
        'Not only are web development jobs in high demand, they also pay well. There are various career routes you can take within the realm of web development, including Front End Web Developer, Back End Web Developer, and Full Stack Web Developer plus language-specific roles such as Python Developer, Ruby Developer, and Java Developer. Though the salaries for these positions vary depending upon where you’re located and how much experience you have, they tend to hover between $100,000 and $130,000 per year. That’s about twice as much as the average wage in the United States, which was just over $56,000 in 2020.',
    },
    {
      img: `${process.env.PUBLIC_URL}/images/w4.png`, 
      title: 'Teamwork and Community',
      description:
        'Another reason web development makes such a stellar career choice is that it offers you the opportunity to work with a team and become part of a large, active community of developers. While the standard image of a programmer might be someone who works alone in a darkened room, the truth is that being a Web Developer requires being part of a team.',
    },
  ];  

  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Why Choose <span>Web Development</span>
          </h2>
        </div>
        <div className="why_container">
          {reasons.map((reason, index) => (
            <div className="box" key={index}>
              <div className="img-box">
                <img src={reason.img} alt={reason.title} />
              </div>
              <div className="detail-box">
                <h5>{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
