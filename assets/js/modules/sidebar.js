export default function sidebarConfig() {
    let barIcon = document.querySelector(".bar-icon");
    let sidebar = document.querySelector(".sidebar");
    const darkBackground = document.querySelector(".darkBackground");
    let body = document.querySelector("body");

    barIcon.onclick = function() {
        barIcon.classList.toggle("active");
        sidebar.classList.toggle("sidebar-activated");
        darkBackground.classList.toggle("activated");

        if(sidebar.classList.contains("sidebar-activated")) {
            body.style.overflow = "hidden";
        }else{
           body.style.overflow = "auto"; 
        }

        darkBackground.onclick = function() {
            darkBackground.classList.remove("activated");
            barIcon.classList.remove("active");
            sidebar.classList.remove("sidebar-activated");
            body.style.overflow = "auto";
        }
    }

    let sidebarNavItem = document.querySelectorAll(".sidebar nav li a");

    sidebarNavItem.forEach((e) => {
        e.onclick = function(item) {
            darkBackground.classList.toggle("activated");
            barIcon.classList.remove("active");
            sidebar.classList.remove("sidebar-activated");
            body.style.overflow = "auto";
        }
    })
}