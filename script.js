const menuBurger = document.getElementsByTagName('svg');
const openSideBar = document.getElementsByClassName("navbar");
menuBurger.addEventListener('click', function(event) {
    openSideBar.style.width = "165";
    openSideBar.style.display = "flex"
})