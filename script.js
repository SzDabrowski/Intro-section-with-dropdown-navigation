const dropdows = document.querySelectorAll(".dropdown");

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