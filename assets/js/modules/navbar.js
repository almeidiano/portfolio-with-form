import {c, cs} from "./minSelector.js";
const nav = c('header nav');

export default function navConfig() {
    const staticScroll = window.scrollY;
    const activatedStatic = staticScroll > 20;
    const sections = cs('section');
    const navItems = cs('.nav-items li a');

    if(activatedStatic) {
        nav.classList.toggle('menu-int-active', staticScroll > 20);
        c(".nav-items").classList.add('nav-items-activated');
    }

    document.addEventListener("scroll", () => {
        let current = "";
        const scrollTop = window.scrollY;
        let activatedScroll = scrollTop > 20;
        
        if(activatedScroll) {
            nav.classList.add('menu-int-active');
        }else{
            nav.classList.remove('menu-int-active');
        }

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach((li) => {
            li.classList.remove('item-activated');
            if(li.classList.contains(current)){
                li.classList.add('item-activated');
            }
        })
    })
}

export {nav}