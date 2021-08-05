import React, { useState } from 'react';

// Constatntly should be on page
import Nav from './Components/Nav';
import Footer from './Components/Footer.js';


import About from './Components/About';
import Projects from './Components/Projects/index';
import ContactForm from './Components/Contact';

import Resume from './Components/Resume/Resume';

// The main home screen
import Home from './Components/Home/Home'




function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
     
        {!contactSelected ? (
          <>
             <Home></Home>
           
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
        <Footer></Footer>

    </div>
  );
}

export default App;
