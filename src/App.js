import React, { useState } from 'react';

// Constatntly should be on page
import Nav from './Components/Nav';
import Footer from './Components/Footer.js';


import About from './Components/About';
import Projects from './Components/Portfolio/index';
import ContactForm from './Components/Contact';

import Resume from './Components/Resume/Resume';





function App() {
  const [currentTab, setCurrentTab] = useState("about");

  // This function checks to see which tab is selected and then generates the appropriate tab.
  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <ContactForm />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };


  return (
    <div>
      <Nav
        /*categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}*/
      ></Nav>
      <main>

      {renderTab()}
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
