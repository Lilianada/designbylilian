const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        // toggle.addEventListener('click', ()=>{
        //     nav.classList.toggle('show-menu')
        // })  
        nav.classList.toggle('show-menu')
        }
    }
showMenu('nav-toggle','nav-menu')


// Toggle from straight to cross
function onClickMenu(){
    showMenu('nav-toggle','nav-menu')
    document.getElementById("nav-toggle").classList.toggle("change") 
}

// REMOVE MOBILE SCREEN MENU
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// Type writer effect
class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate
        this.el = el
        this.loopNum = 0
        this.period = parseInt(period, 10) || 2000
        this.txt = ''
        this.tick()
        this.isDeleting = false
    }
    tick() {
        var i = this.loopNum % this.toRotate.length
        var fullTxt = this.toRotate[i]

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

        var that = this
        var delta = 200 - Math.random() * 100

        if (this.isDeleting) { delta /= 2} 

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false
            this.loopNum++
            delta = 500
        }

        setTimeout(function () {
            that.tick()
        }, delta)
    }
}


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

// SROLL SECTIONS ACTIVE LINK
// var header = document.getElementById("nav-list");
// var btns = document.getElementsByClassName("nav_item");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace("active", "");
//   }
//   this.className += "active";
//   });
// }



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


//Reusable elements

class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <header class="header_wrap" id="header">
                    <!-- navigation menu -->
                <nav class="nav_bar bd_container">
                    <a href="#" class="nav_logo">designedbylilian</a>

                    <!----------Navigation Links--------->
                    <div class="nav_menu" id="nav-menu">
                        <ul class="nav_list">
                            <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
                            <li class="nav_item"><a href="about.html" class="nav_link">About</a></li>
                            <li class="nav_item"><a href="portfolio.html" class="nav_link">Portfolio</a></li>
                            <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                            <li class="nav_item"><a href="shop.html" class="nav_link">Shop</a></li>
                        </ul>
                    </div>

                    <!-------Menu bars-------->
                    <div class="nav_toggle" onclick="onClickMenu()" id="nav-toggle">
                        <div class="bar b1" id="bar1"></div>
                        <div class="bar b2" id="bar2"></div>
                        <div class="bar b3" id="bar3"></div>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="wrapper footer_wrap">
                <div class="container">
                    <div class="row">
                        <h3 class="section_subtitle">designedbylilian</h3>
                        <div class="home_social">
                            <a href="www.twitter.com/_ozie/"><i class="icofont-twitter social_icon"></i></a>
                            <a href="www.instagram.com/confusedcr8ive"><i class="icofont-instagram social_icon"></i></a>
                            <a href="www.linkedin.com/in/lilian-ada-793033135/"><i class="icofont-linkedin social_icon"></i></a>
                            <a href="www.github.com/lilianada"><i class="icofont-github social_icon"></i></a>
                            <a href="#"><i class="icofont-pinterest social_icon"></i></a>
                        </div>
                        <div class="footer_text">
                            <p>
                                © 2021 copyright DesignedbyLilian all right reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', myFooter)

class myContact extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <section class="wrapper contact_wrap">
                <div class="wrapper">
                    <div class="data_wrap">
                        <div class="data_bg1">
                            <h2 class="section_title">Get In Touch</h2>
                            <form class="contact_form" method="post" action="contact-form-process.php">
                                    <div class="row input-container">
                                            <div class="col_md">
                                                <div class="styled-input wide">
                                                    <input type="text" required />
                                                    <label>Name</label> 
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="styled-input">
                                                    <input type="text" required />
                                                    <label>Email</label> 
                                                </div>
                                                <div class="styled-input">
                                                    <input type="text" required />
                                                    <label>Phone No</label> 
                                                </div>
                                            </div>
                                            
                                            <div class="col_md">
                                                <div class="styled-input wide">
                                                    <textarea required></textarea>
                                                    <label>Message</label>
                                                </div>
                                            </div>
                                            <div class="col_md">
                                                <button type="submit" class="button">
                                                    <a href = "mailto: lilianokeke.ca@gmail.com?subject = Feedback&body = Message">Send Message</a>
                                                </button>
                                            </div>
                                    </div>
                                
                            </form>
                        </div>
                        <div class="data_bg2">
                            <h3 class="section_subtitle">Hi there,</h3> 
                            <p>   
                                I'd really love if you leave a message for me about yourself, something you think I should have done better with my portfolio or a chat about possible employment for me.
                                Don't be shy, I don't bite. I mean, I do but not humans, only food. So just do it!
                            </p>                            
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define('my-contact', myContact)



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