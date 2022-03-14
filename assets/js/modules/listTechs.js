import {c, cs} from './minSelector.js';
import allTechnologies from './allTechnologies.js';

export default function listTechs() {
	allTechnologies.map((item) => {
		let technologyItem = c(".skills-section .skill-item").cloneNode(true);
		
		technologyItem.querySelector(".skill-logo img").src = item.techLogo;
		technologyItem.querySelector(".skill-title").innerText = item.techName;

		if(item.learned) {
			technologyItem.querySelector(".skill-status").classList.add("learned");
			technologyItem.querySelector(".skill-status span").innerText = "Aprendido";
		}else {
			technologyItem.querySelector(".skill-status").classList.add("learning");
			technologyItem.querySelector(".skill-status span").innerText = "Aprendendo";
		}

		c(".skills-section").append(technologyItem);
	})

	cs(".skill-item")[0].remove();
}