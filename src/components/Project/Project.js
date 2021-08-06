import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const Link = currentProject.deployed;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<Card style={{ width: "18rem" }}>
			
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={Link} target="_blank" className="card-link">
						{name} Link
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;