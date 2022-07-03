import {c} from './minSelector.js';
import {list, allTechnologies} from './allTechnologies.js';
import listTechs from './listTechs.js';

export default function knowMore() {
    c('.know-more-tech a').onclick = () => {
        c('.know-more-tech').style.display = "none";
        c('.skills-content-area').classList.toggle("disabled-know-more-tech");
        c('.about').classList.toggle("disabled-know-more-tech");

        setTimeout(() => {
            c('.about').style.width = "0%";

            setTimeout(() => {
                c('.skills').style.width = "100%";
                c('.about').style.display = "none";
                
                setTimeout(() => {
                    c('.skills-content-area').classList.toggle("disabled-know-more-tech");
                    c('.skills-content-area').style.width = "100%";    
                    c('.skills-section-area').innerHTML = null;  
                    c('.skills-section-area').innerHTML = '<div class="skill-item"><div class="skill-logo"><img src="#"></div><div class="skill-title">--</div><div class="skill-status-section"><div class="skill-status"><span>--</span></div></div></div>';
                    c('.skills-section-area').classList.toggle('all-technologies');  
                    listTechs(allTechnologies);
                    if(c('.skills').style.width == '100%') {
                        c('.exit-know-more').style.display = 'block';
                    }  
                }, 350);
            }, 350);
        }, 500);
    }

    c('.exit-know-more i').onclick = () => {
        c('.exit-know-more').style.display = 'none';
        c('.skills-content').classList.toggle("disabled-know-more-tech");
        c('.about').style.display = "flex";

        setTimeout(() => {
            c('.about').style.width = "100%";

            setTimeout(() => {
                c('.about').classList.toggle("disabled-know-more-tech");
                c('.know-more-tech').style.display = "block"; 
                c('.skills-section-area').innerHTML = null;  
                c('.skills-section-area').innerHTML = '<div class="skill-item"><div class="skill-logo"><img src="#"></div><div class="skill-title">--</div><div class="skill-status-section"><div class="skill-status"><span>--</span></div></div></div>';
                c('.skills-section-area').classList.toggle('all-technologies');  
                c('.skills-content').classList.toggle("disabled-know-more-tech");
                listTechs(list);
            }, 500);
        }, 500);
    }
}