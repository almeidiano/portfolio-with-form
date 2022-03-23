import {c, cs} from './minSelector.js';
import allTechnologies from './allTechnologies.js';

export default function listTechs() {
	allTechnologies.map((item) => {
		let technologyItem = c(".skills-section-area .skill-item").cloneNode(true);
		
		technologyItem.querySelector(".skill-logo img").src = item.techLogo;
		technologyItem.querySelector(".skill-title").innerText = item.techName;

		if(item.learned) {
			technologyItem.querySelector(".skill-status").classList.add("learned");
			technologyItem.querySelector(".skill-status span").innerText = "Aprendido";
		}else {
			technologyItem.querySelector(".skill-status").classList.add("learning");
			technologyItem.querySelector(".skill-status span").innerText = "Aprendendo";
		}

		if(item.rounded) {
			technologyItem.querySelector(".skill-logo img").style.borderRadius = "100%";
		}

		c(".skills-section-area").append(technologyItem);
	})

	cs(".skill-item")[0].remove();
}