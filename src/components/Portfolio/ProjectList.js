import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Beyblade Animation',
      description: 'Short animation using Autodesk Maya.',
    },
    {
      name: 'Coming Out',
      description: 'Short 5-shot student film',
    },
    {
      name: 'Workday Scheduler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Bike Watch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Bark Book',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);



  return (
    <div>
      <div className="flex-row">
        
      </div>
    </div>
  );
};

export default ProjectList;
