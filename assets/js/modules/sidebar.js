import {c, cs} from './minSelector.js';

export default function sidebarConfig() {
    let barIcon = c(".bar-icon");
    let sidebar = c(".sidebar");
    const darkBackground = c(".darkBackground");
    let body = c("body");

    barIcon.onclick = function() {
        barIcon.classList.toggle("active");
        sidebar.classList.toggle("sidebar-activated");
        darkBackground.classList.toggle("activated-sidebar");

        if(sidebar.classList.contains("sidebar-activated")) {
            body.style.overflow = "hidden";
        }else{
           body.style.overflow = "auto"; 
        }

        darkBackground.onclick = function() {
            darkBackground.classList.remove("activated-sidebar");
            barIcon.classList.remove("active");
            sidebar.classList.remove("sidebar-activated");
            body.style.overflow = "auto";
        }
    }

    let sidebarNavItem = cs(".sidebar nav li a");

    sidebarNavItem.forEach((e) => {
        e.onclick = function(item) {
            darkBackground.classList.toggle("activated-sidebar");
            barIcon.classList.remove("active");
            sidebar.classList.remove("sidebar-activated");
            body.style.overflow = "auto";
        }
    })
}