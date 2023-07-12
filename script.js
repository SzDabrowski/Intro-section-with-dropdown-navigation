const navlinks = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    body.classList.toggle('active');
})

navlinks.forEach(navlink => {
    const dropdownList = navlink.querySelector(".dropdown-list");
    const dropdown = navlink.querySelector(".dropdown");

    if(dropdown){
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('link-open');
            dropdownList.classList.toggle('open');
        })
    }
})


/*
dropdows.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".submenu-wrap");
    const options = dropdown.querySelectorAll(".submenu li");
    const selected = dropdown.querySelector(".selected");
    const arrow = dropdown.querySelector(".arrow");

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        menu.classList.toggle('submenu-open');
        arrow.classList.toggle('active-arrow');
    });

    options.forEach(option => {
        option.addEventListener('click',()=>{
            select.classList.remove('select-clicked');
            menu.classList.remove('submenu-open');
            arrow.classList.remove('active-arrow');
        })
    })

});

*/

