import React from 'react';

function About() {
  
  return (
    <section className="my-5">
      <h1 id="about">Andrea Augustin</h1>
      <img
					src='../Assets/portfolio_picture.jpg'
					alt="about-me"
					className="photo"
				/>

      <div className="my-2">
        <p>
          My name is Andrea Augustin, and I'm currently a Quality Assurance Analyst at Naughty Dog. 
          I am a recent graduate of the University of Notre Dame, and doubled majored with a Bachelor's of Science in Computer Engineering and a second major in Film,
          Televsion, and Theater (concentration in film).
          I am aspiring to experience the entertainment and tech industries and apply
          what I have learned and love in order to better understand my choices in pursuing future
          occupations.
        </p>
      </div>
    </section>
  );
}

export default About;
