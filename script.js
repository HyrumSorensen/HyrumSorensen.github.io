        //javascript for navigation bar effects on scroll
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle('sticky', window.scrollY > 0);
          });
          
          //javascript for responsive navigation sidebar menu
          const menuBtn = document.querySelector(".menu-btn");
          const navigation = document.querySelector(".navigation");
          const navigationItems = document.querySelectorAll(".navigation a")
          
          menuBtn.addEventListener("click",  () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
          });
          
          navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
              menuBtn.classList.remove("active");
              navigation.classList.remove("active");
            });
          });
          
          //javascript for scroll to top button
          const scrollBtn = document.querySelector(".scrollToTop-btn");
          
          window.addEventListener("scroll", function(){
            scrollBtn.classList.toggle("active", window.scrollY > 500);
          });
          
          //javascript for scroll back to top on click scroll-to-top button
          scrollBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          });
          
          //javascript for reveal website elements on scroll
          window.addEventListener("scroll", reveal);
          
          function reveal(){
            var reveals = document.querySelectorAll(".reveal");
          
            for(var i = 0; i < reveals.length; i++){
              var windowHeight = window.innerHeight;
              var revealTop = reveals[i].getBoundingClientRect().top;
              var revealPoint = 50;
          
              if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add("active");
              }
            }
          }
                
document.getElementById('project-1').addEventListener('click', () => {
    window.open('https://mewsika.herokuapp.com', '_blank')
})
document.getElementById('project-2').addEventListener('click', () => {
    window.open('https://github.com/HyrumSorensen/CS236-Datalog-Program', '_blank')
})
document.getElementById('email-icon').addEventListener('click', () => {
    let link = 'mailto:hgsoren@byu.edu'
    window.open(link, '_blank')
})
document.getElementById('website-icon').addEventListener('click', () => {
    let link = 'https://hyrumsorensen.github.io'
    window.open(link, '_blank')
})

document.getElementById('address-icon').addEventListener('click', () => {
    let link = 'https://www.google.com/maps/place/Provo,+UT/@40.2572423,-111.9260001,11z/data=!3m1!4b1!4m5!3m4!1s0x874d9271930bf1bf:0x1d90f12600b556ef!8m2!3d40.2338438!4d-111.6585337'
    window.open(link, '_blank')
})
document.getElementById('insta').addEventListener('click', () => {
    let link = 'https://www.instagram.com/hyrum_sorensen/'
    window.open(link, '_blank')
})
document.getElementById('git-hub').addEventListener('click', () => {
    let link = 'https://github.com/HyrumSorensen'
    window.open(link, '_blank')
})
document.getElementById('discord').addEventListener('click', () => {
    let link = 'https://discordapp.com/users/9609/'
    window.open(link, '_blank')
})
document.getElementById('facebook').addEventListener('click', () => {
    let link = 'https://www.facebook.com/hyrumgary/'
    window.open(link, '_blank')
})
document.getElementById('venmo').addEventListener('click', () => {
    let link = 'https://account.venmo.com/u/Hyrum-Sorensen'
    window.open(link,'_blank')
})