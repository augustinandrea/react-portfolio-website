import React from 'react';
import Project from '../Project/Project';
import image0 from '../../Assets/Projects/budget_tracker.png';
import image1 from '../../Assets/Projects/quiz.png';
import image2 from '../../Assets/Projects/work_schedule.png';
import image3 from '../../Assets/Projects/password_gen.png';
import image4 from '../../Assets/Projects/bikewatch.png';
import image5 from '../../Assets/Projects/barkbook.png';

function Portfolio() {
  const projects = ([
    {
      name: 'Budget Tracker',
      description: 'In this project, the application tracks the given budget. It will show the addition and subtraction of funds over the course of time. This is an application that can work while offline.',
      image: image0,
      deployed: 'https://budget-tracker-mongo-pwa.herokuapp.com/',
      github: 'https://github.com/augustinandrea/budget_tracker'
    },
    {
      name: 'Timed Quiz',
      description: "Create a timed quiz that asks a few multiple choice questions. The timed quiz's score is the time left on the quiz. If something is answered wrong, the timed is subtracted by 10 seconds. All scores and initials are saved to local drive.",
      image: image1,
      deployed: 'https://augustinandrea.github.io/timed_quiz/',
      github: 'https://github.com/augustinandrea/timed_quiz'

    },
    {
      name: 'Workday Scheduler',
      description: 'In this code I create a scheduler that goes from 9AM to 5PM. At the top it lists the weekday, date, month, and year. At the bottom there are text boxes that can be wrote in. By pressing the save button, the text can be saved to local storage.',
      image: image2,
      deployed: 'https://augustinandrea.github.io/workday_scheduler/Develop/',
      github: 'https://github.com/augustinandrea/workday_scheduler'
    },
    {
      name: 'Password Generator',
      description: 'Application to generate a password. When generating a password there will be a series of prompts that help create the password. There are multiple alerts that show up and ask if you want uppercase, lowercase, numbers, or special characters in the password.',
      image: image3,
      deployed: 'https://augustinandrea.github.io/friendly_parakeet/Develop',
      github: 'https://github.com/augustinandrea/friendly_parakeet'
    },
    {
      name: 'Bike Watch',
      description: 'As a biker I would like to be informed of biking related incidents around a particular area so I can be proactive in protecting my property and myself.',
      image: image4,
      deployed: 'https://acevezl.github.io/biker/',
      github: 'https://github.com/acevezl/biker'
    },
    {
      name: 'Bark Book',
      description: 'TheBarkBook is social media blog application for dogs. ',
      image: image5,
      deployed: 'https://barkbook.herokuapp.com/',
      github: 'https://github.com/anirud314/BarkBook'
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
