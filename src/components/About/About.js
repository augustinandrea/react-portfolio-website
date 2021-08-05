import React from 'react';
import coverImage from '../../Assets/portfolio_picture.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Andrea Augustin</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          My name is Andrea Augustin, and I'm currently a Quality Assurance Analyst contractor for Naughty Dog.
          I am recent graduate of the University of Notre Dame.
          I doubled majored with a Bachelor's of Science in Computer Engineering and a second major in Film,
          Televsion, and Theater (concentration in film).
          I am aspiring to experience the entertainment and tech industries and apply
          what I have learned and love in order to better understand my choices in pursuing future
          occupations.
          During my time at Notre Dame, I utilized my visual effects and 3D modeling skills
          using Autodesk Maya for multiple animation projects. One of my best-scored projects was
          when I created a UI that implemented balloons of different shapes and colors into the
          simulated world. I would spend time with my fellow project members debugging code
          throughout my classes in group coding projects. I also joined the RPG Club and became a
          game manager. It was my job to look after the new members and make sure they were not
          confused by the varying systems. For one summer, I wrote web front-end applications in
          HTML, CSS, and JavaScript, and during the other summer, I wrote and edited videos and
          blog posts for marketing. Senior executives at SugarCRM, including the Chief Marketing
          Officer and Chief Technical Officer, will be happy to provide references on request.

        </p>
      </div>
    </section>
  );
}

export default About;
