const menu = document.querySelector("#mobile-menu")
const menuList = document.querySelector(".navbar-menu")

const menuFunc = () =>{
    menu.classList.toggle('is-active')
    menuList.classList.toggle('active')
};

menu.addEventListener('click', menuFunc);