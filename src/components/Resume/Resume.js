import React from "react";
import DownloadRes from '../../Assets/Projects/resume_ND_final.pdf';

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume </h1>
				
			</div>
			<div className="bottom-spacing">
				<a href={DownloadRes} download>
					<h4>Download My Resume Here</h4>
				</a>
			</div>
			<div id="resume-list">
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>Version control/Git</li> 
					<li>Responsive design</li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Coding Languages</h5>
				<ol>
					<li>JavaScript</li>
					<li>CSS</li>
					<li>C++</li>
					<li>HTML5</li>
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
				<br></br>
				<h5>Other Proficiencies</h5>
				<ol>
					<li>Basic comprehension of Japanese language</li>
					<li>Autodesk Maya</li>
					<li>Adobe Premiere</li>
					<li>Adobe Photoshop</li>
					<li>Unity Engine</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;