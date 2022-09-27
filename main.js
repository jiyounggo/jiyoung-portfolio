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

//hamburger button for small screen
const navbarToggleBtn= document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
navbarMenu.classList.toggle('open');


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

});

//click on the "arrow up"

arrowup.addEventListener('click', ()=>{

    scrollIntoView('#home');
})



//project filtering

const workBtn = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');


workBtn.addEventListener('click',(event)=>{
const filter = event.target.dataset.filter;
/* console.log(filter)를 하게되면 span버튼을 클릭했을때 undefined 이 나오기 때문에 
html에서 각 span data-type 지정해주면 문제가 해결된다*/


//botton state
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
const target = event.target.nodeName ==='BUTTON' ? event.target : event.target.parentNode;
target.classList.add('selected');


//project animation
projectContainer.classList.add('anim-out');

setTimeout(()=>{
    projectContainer.classList.remove('anim-out')
},300);
//0.3초뒤에 anim-out이 제거됨


projects.forEach((pro)=>{
 
if(filter===pro.dataset.type ||filter==='all'){
    pro.classList.remove('invisible');
}else{
    pro.classList.add('invisible');
}

});

});

function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : "smooth"});

}


// loading
const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{

     setTimeout(() => { //로딩속도 구현
         loader.style.opacity = '0';
         html.style.overflow = 'auto'; //스크롤 방지 해제
        
        setTimeout(() => {
         loader.style.display = 'none';
      }, 800);
  }, 1000);
})
