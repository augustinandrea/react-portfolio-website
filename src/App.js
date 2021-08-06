import React, { useState } from 'react';
import "./App.css";

// Constatntly should be on page
import Nav from './Components/Nav';
import Footer from './Components/Footer.js';


import About from './Components/About';
import Portfolio from './Components/Portfolio/index';
import ContactForm from './Components/Contact';

import Resume from './Components/Resume/Resume';





function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
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
			<div className="mobile-header">
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;