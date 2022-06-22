import {c, cs, ccn} from './minSelector.js';
import allProjects from './allProjects.js';

function listProjects() {
    allProjects.map((item, index) => {
        let projectItem = c(".projects-section .project-item").cloneNode(true);
        projectItem.querySelector("img").src = item.thumbImg;
        projectItem.querySelector(".project-title").innerText = item.projectName;

        let viaLink = item.viaLink;
        const projectStacks = item.projectStacks;

        viaLink.forEach(link => {
            if(Object.keys(link) == 'demoLink') {
                projectItem.querySelector(".project-details .demo").href = link.demoLink;
                if(link.demoLink.includes("/") == false){
                    projectItem.querySelector(".project-details .demo").classList.add("disabled");
                    projectItem.querySelector(".project-details .demo").removeAttribute("href");
                }
            }

            if(Object.keys(link) == 'githubLink') {
                projectItem.querySelector(".project-details .github").href = link.githubLink;
                if(link.githubLink.includes("/") == false){
                    projectItem.querySelector(".project-details .github").classList.add("disabled");
                    projectItem.querySelector(".project-details .github").removeAttribute("href");
                }
            }
        })

        projectStacks.forEach(stack => {
            const stackImg = document.createElement("img");
            projectItem.querySelector(".project-tech").appendChild(stackImg);
            let projectStackImg = projectItem.querySelectorAll(".project-tech img");

            switch(stack) {
                case 'html/css':
                projectStackImg[0].src = 'assets/img/icons/html-css-shield.svg'
                break;
                case 'react':
                projectStackImg[0].src = 'assets/img/icons/react-icon.svg'
                break;
                case 'javascript':
                projectStackImg[1].src = 'assets/img/icons/javascript-icon.svg'
                break;
                case 'bootstrap':
                projectStackImg[2].src = 'assets/img/icons/bootstrap-shield.svg'
                break;
                case 'php':
                projectStackImg[3].src = 'assets/img/icons/php-shield.svg'
                break;
                case 'laravel':
                projectStackImg[3].src = 'assets/img/icons/laravel-min-icon.svg'
                break;
            }
        })

        projectItem.querySelector(".info").setAttribute("data-id", item.id);
        c(".projects-content").appendChild(projectItem);
    })

    cs(".project-item")[0].remove();
}

function getProjectInfo() {
    document.getProjectInfo = (info) => {
        const loadingDarkBg = c(".loadingDarkBg");
        const darkBackground = c(".darkBackground");
        const body = c("body");
        c(".projectModal").classList.remove("closeModal");

        loadingDarkBg.style.display = "flex"
        body.style.overflow = "hidden";

        setTimeout(() => {
            loadingDarkBg.style.opacity = "1";
        }, 200);

        function disableLoadingDarkBg() {
            loadingDarkBg.style.display = "none"
            body.style.overflow = "auto";
        }

        let projectId = info.getAttribute("data-id");
        let foundProject = allProjects.find(element => element.id == projectId);

        if(foundProject) {
            disableLoadingDarkBg();
            loadingDarkBg.style.opacity = "0";

            let projectModalArea = c(".projectModalArea");
            let projectModal = c(".projectModal");

            darkBackground.classList.toggle("visible");
            darkBackground.style.zIndex = "9";
            projectModalArea.style.display = "flex";
            projectModalArea.style.opacity = "1";

            function closeModal() {
                projectModalArea.style.display = "none";
                projectModalArea.style.opacity = "0";
                darkBackground.classList.remove("visible"); 
                c(".projectModal .modal-body .projectStacks").innerHTML = null;
                c(".projectModal .carousel-indicators").innerHTML = null;
                
                let allCarouselItems = cs(".projectModal .carousel-item");
                allCarouselItems.forEach(item => {
                    item.classList.remove("projectThumbActive");
                    item.remove();
                }) 
            }

            c(".project-times").onclick = function() {
                projectModal.classList.add("closeModal");
                setTimeout(closeModal, 300);
            }

            projectModalArea.onclick = ((e) => {
                let el = e.srcElement;

                if(el.classList.value == "projectModalArea") {
                    projectModal.classList.add("closeModal");
                    setTimeout(closeModal, 300);
                }
            });

            c(".projectModal .modal-body .projectTitle h2").innerText = foundProject.projectName;
            c(".projectModal .modal-body .projectDesc").innerText = foundProject.projectDesc;

            let projectImgs = foundProject.projectImgs;

            projectImgs.forEach(projectImg => {
                let buttonIndicator = document.createElement("button");
                let carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                let projectImgEl = document.createElement("img");
                projectImgEl.src = projectImg.src;
                carouselItem.appendChild(projectImgEl)
                buttonIndicator.setAttribute("img-id", projectImg.id);
                c(".projectModal .carousel-indicators").appendChild(buttonIndicator);
                c(".projectModal .carousel-indicators button").classList.add("activated");
                c(".projectModal .projectImg").appendChild(carouselItem);
                cs(".carousel-item")[0].classList.add("projectThumbActive");
                buttonIndicator.onclick = function(e) {
                    let allCarouselItems = cs(".projectModal .carousel-item");
                    allCarouselItems.forEach(item => {
                        item.classList.remove("projectThumbActive");
                    }) 
                    carouselItem.classList.add("projectThumbActive");
                    let buttons = cs(".projectModal .carousel-indicators button");
                    buttons.forEach(button => {
                        button.classList.remove("activated");
                    })
                    let button = e.srcElement;
                    button.classList.toggle("activated");
                }
            })

            const carouselItem = c(".projectModal .carousel-item");
            const allCarouselItems = cs(".projectModal .carousel-item");
            let buttons = cs(".projectModal .carousel-indicators button");
            let i = 0;

            function initCarousel() {
                if(allCarouselItems[i].classList.contains("projectThumbActive") == false) {
                    i++;
                    if(i > allCarouselItems.length - 1) {
                        i = 0;
                    }
                }

                allCarouselItems.forEach(item => {
                    item.classList.remove("projectThumbActive");
                });
                buttons.forEach(button => {
                    button.classList.remove("activated");
                })

                i++;

                if(i > allCarouselItems.length - 1) {
                    i = 0;
                }

                allCarouselItems[i].classList.add("projectThumbActive");
                buttons[i].classList.add("activated");
            }

            setInterval(initCarousel, 3000);

            let projectStacks = foundProject.projectStacks;
            projectStacks.forEach(stack => {
                let stackImg = document.createElement("img");
                c(".projectModal .modal-body .projectStacks").appendChild(stackImg);
                let projectStacksImg = cs(".projectModal .modal-body .projectStacks img");

                switch(stack) {
                    case 'html/css':
                    projectStacksImg[0].src = 'assets/img/icons/html-css-shield.svg'
                    break;
                    case 'react':
                    projectStacksImg[0].src = 'assets/img/icons/react-icon.svg'
                    break;
                    case 'javascript':
                    projectStacksImg[1].src = 'assets/img/icons/javascript-icon.svg'
                    break;
                    case 'bootstrap':
                    projectStacksImg[2].src = 'assets/img/icons/bootstrap-shield.svg'
                    break;
                    case 'php':
                    projectStacksImg[3].src = 'assets/img/icons/php-shield.svg'
                    break;
                    case 'laravel':
                    projectStacksImg[3].src = 'assets/img/icons/laravel-min-icon.svg'
                    break;
                }
            })
        }
    }
}

export {listProjects, getProjectInfo};