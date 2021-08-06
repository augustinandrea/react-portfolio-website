import React from 'react';
import Project from '../Project/Project';

function Portfolio() {
  const projects = ([
    {
      name: 'Beyblade Animation',
      description: 'Short animation using Autodesk Maya.',
      image: '../../Assets/Projects/maya_animation.jpeg',
      link: "https://www.youtube.com/watch?v=BGvb8dRNdWk&ab_channel=AndreaAugustin"
    },
    {
      name: 'Coming Out',
      description: 'Short 5-shot student film',
      image: '../../Assets/Projects/coming_out.png',
      link: "https://www.youtube.com/watch?v=wqzMbHQkdu0&ab_channel=AndreaAugustin"
    },
    {
      name: 'Workday Scheduler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      image: '',
      link: "https://augustinandrea.github.io/workday_scheduler/Develop/"
    },
    {
      name: 'Timed Quiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      image: '../../Assets/Projects/run_buddy.png',
      link: "https://augustinandrea.github.io/timed_quiz/"
    },
    {
      name: 'Bike Watch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      image: '../../Assets/Projects/bikewatch.png',
      link: "https://acevezl.github.io/biker/"
    },
    {
      name: 'Bark Book',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      image: '../../Assets/Projects/run_buddy.png',
      link: "https://barkbook.herokuapp.com/"
    }
  ]);

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );

}

export default Portfolio;
