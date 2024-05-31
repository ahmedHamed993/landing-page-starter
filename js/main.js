const linksWrapper = document.querySelector(".navbar__links_wrapper");
const linksWrapperOverlayBtn = document.querySelector(".navbar__links_wrapper .navbar__links_overlay_btn");
const navbarMenuIcon = document.querySelector(".navbar__menu_icon");


navbarMenuIcon.addEventListener('click', ()=>{
    linksWrapper.classList.add("show");
})
linksWrapperOverlayBtn.addEventListener('click', ()=>{
    linksWrapper.classList.contains("show") ? linksWrapper.classList.remove("show") :"";
})