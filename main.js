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


//project filtering

const workBtn = document.querySelector('.work__categories');
const projects = document.querySelectorAll('.project');


workBtn.addEventListener('click',(event)=>{
const filter = event.target.dataset.filter;

/* console.log(filter)를 하게되면 span버튼을 클릭했을때 undefined 이 나오기 때문에 
html에서 각 span data-type 지정해주면 문제가 해결된다*/
projects.forEach((pro)=>{
 
if(filter===pro.dataset.type ||filter==='all'){
    pro.classList.remove('invisible');
}else{
    pro.classList.add('invisible');
}

})});



//project animation

