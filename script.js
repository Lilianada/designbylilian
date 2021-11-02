const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
        }
    }
showMenu('nav-toggle','nav-menu')

// Type writer effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// Toggle from straight to cross
function onClickMenu(){
    document.getElementById("nav-toggle").classList.toggle("change")
}

// REMOVE MOBILE SCREEN MENU
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// SROLL SECTIONS ACTIVE LINK
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sections = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav_menu a[href*=' + sections + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav_menu a[href*=' + sections + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL TOP
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


//FILTER TAB FOR PORTFOLIO
var gridItems = document.querySelectorAll('.item')

function showAll() {
    gridItems.forEach(function(element) {
        element.classList.add('show')
    })
}

function showCategory(category) {
    gridItems.forEach(function(element){
        if (element.classList.contains(category)) {
            element.classList.add('show')
        }
        else {
            element.classList.remove('show')
        }
    })
}
showAll()


//SCROLL ANIMATION FROM THE BOTTOM
// const scrollElements = document.querySelectorAll(".js-scroll");
// const throttleCount = document.getElementById('throttle-count');
// const scrollCount = document.getElementById('scroll-count');

// var throttleTimer;

// const throttle = (callback, time) => {
//   if (throttleTimer) return;

//   throttleTimer = true;
//   setTimeout(() => {
//     callback();
//     throttleTimer = false;
//   }, time);
// }

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }
// var timer=0;
// var count=0;
// var scroll = 0;

// window.addEventListener("scroll", () => { 
//   scrollCount.innerHTML = scroll++;
//   throttle(() => {
//     handleScrollAnimation();
//     throttleCount.innerHTML = count++;
//   }, 250);
// });