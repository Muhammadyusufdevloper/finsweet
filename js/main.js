let navBar = document.getElementById("nav__btn__menu");
let navList = document.getElementById("header__nav-list");
let bactop = document.getElementById("bactop")
let header = document.getElementById("header");

window.addEventListener("scroll",function() {
    showBactop();
    showHeadershrink();
})
navBar.addEventListener("click", function(){
    navList.classList.toggle("show-header__nav-list");
})
function showBactop(){
    if(scrollY>50){
        bactop.classList.add("show-bactop");
    }
    else{
        bactop.classList.remove("show-bactop");
    }
}
function showHeadershrink(){
    if(scrollY>0){
        header.classList.add("show-header");
    }
    else{
        header.classList.remove("show-header");
    }
}