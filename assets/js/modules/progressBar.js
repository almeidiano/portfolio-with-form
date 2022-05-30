import {nav} from './navbar.js';
import {c} from './minSelector.js';

let progressBarr = c('nav progress'); 

export default function progressBar() {
	document.addEventListener("scroll", () => {
		if(nav.classList.contains("menu-int-active")) {
			let scrollTop = window.scrollY;
			let viewportHeight = document.body.scrollHeight - window.innerHeight;
			let scrollPercent = (scrollTop / viewportHeight) * 100;

			progressBarr.setAttribute("value", scrollPercent);

			progressBarr.style.opacity = "1";
		}else{
			progressBarr.style.opacity = "0";
		}
	})
}