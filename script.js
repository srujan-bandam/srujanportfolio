let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");


window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let choose=document.querySelector(".navbar .menu ");


menuBtn.onclick =function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";   
    
}
cancelBtn.onclick=function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity="1";
    
}

choose.onclick=function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity="1"; 
}
 

