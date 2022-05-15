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




//scoll slowly transparent

const home= document.querySelector('#home');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{

    home.style.opacity=1-window.scrollY/homeheight

});


//arrow up

const arrowup=document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=>{

    if(window.scrollY>homeheight/2){
        arrowup.classList.add('visible');
    }else{
        arrowup.classList.remove('visible');

    }

})

//click on the "arrow up"

arrowup.addEventListener('click', ()=>{

    scrollIntoView('#home');
})


function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : "smooth"});

}