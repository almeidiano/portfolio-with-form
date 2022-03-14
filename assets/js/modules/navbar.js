export default function navConfig() {
    const staticScroll = window.scrollY;
    const nav = document.querySelector('header nav');
    const activatedStatic = staticScroll > 20;

    if(activatedStatic) {
        nav.classList.toggle('menu-int-active', staticScroll > 20);
        document.querySelector(".nav-items").classList.add('nav-items-activated');
    }

    function staticActivateNavItem(activatedStatic) {
        let navitems = document.querySelectorAll(".nav-items li a");
        let items = document.querySelectorAll(".nav-items li a");

        switch(true) {
            case (staticScroll < 530):
                navitems[0].classList.add("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (staticScroll > 530 && staticScroll < 1219):
                navitems[1].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (staticScroll > 1219 && staticScroll < 1841):
                navitems[2].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (staticScroll > 1841):
                navitems[3].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
            break;
        }
    }

    staticActivateNavItem(activatedStatic);

    document.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        let activatedScroll = scroll > 20;
        
        if(activatedScroll) {
            nav.classList.add('menu-int-active');
        }else{
            nav.classList.remove('menu-int-active');
        }

        let navitems = document.querySelectorAll(".nav-items li a");
        let items = document.querySelectorAll(".nav-items li a");

        switch(true) {
            case (scroll < 530):
                navitems[0].classList.add("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (scroll > 530 && scroll < 1219):
                navitems[1].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (scroll > 1219 && scroll < 1841):
                navitems[2].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[3].classList.remove("item-activated");
            break;
            case (scroll > 1841):
                navitems[3].classList.add("item-activated");
                navitems[0].classList.remove("item-activated");
                navitems[1].classList.remove("item-activated");
                navitems[2].classList.remove("item-activated");
            break;
        }
    })

    let navItems = document.querySelectorAll(".nav-items li a");

    navItems.forEach((e) => {
         e.onclick = function() {
            e.classList.add("item-activated");
        }
    })
}
