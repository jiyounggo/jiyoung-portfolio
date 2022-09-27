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
const filter = event.target.dataset.filter ||  e.target.parentNode.dataset.filter;
/* console.log(filter)를 하게되면 span버튼을 클릭했을때 undefined 이 나오기 때문에 
html에서 각 span data-type 지정해주면 문제가 해결된다*/
  if (filter == null) {
    return;
  }

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

//1.모든 섹션 요소들과 해당메뉴아이템들을 가지고 온다
//2. 인터섹션 옵저버를 이용해 모든 섹션을 관찰한다
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonials',
    '#contact'
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`))

let selectedNavIndex=0;
let selectedNavItem = navItems[0];
function selectNavItem (selected){
    // const navItem = navItems[selectedIndex]
    // navItem.classList.add('active');
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
}
const observerOptions = {
    root:null,
    rootMargin:'0px',
    threshold:0.4,
}
const observerCallback = (entries,observer) =>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting && entry.intersectionRatio>0){
            const index = sectionIds.indexOf(`#${entry.target.id}`)
            if(entry.boundingClientRect.y<0){
                selectedNavIndex = index +1;             
            }else{
                selectedNavIndex = index -1;
            } 
        }  
    })
}
const observer = new IntersectionObserver(observerCallback,observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll',()=>{
    if(window.scrollY ===0 ){
        selectedNavIndex =0;
    }else if (
        window.scrollY + window.innerHeight === 
        document.body.clientHeight){
        selectedNavIndex = navItems.length -1;
    }
    selectNavItem(navItems[selectedNavIndex]);
})