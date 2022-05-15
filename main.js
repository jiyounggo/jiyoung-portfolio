'use strict';
//Navbar
const navbar = document.querySelector('#navbar');


const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll',()=>{

if(window.scrollY>navbarHeight){
    navbar.classList.add('navbar--dark') ;
}else{
    navbar.classList.remove('navbar--dark') ;
}

});
//scroll
const navbarMenu= document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{

 
  const link =event. target .dataset.link;

    if(link==null){
        return;
    }
    scrollIntoView(link);
});

//contact

const contact = document.querySelector('.home__contact');

contact.addEventListener('click',() =>{

    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : "smooth"});

}