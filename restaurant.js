const menu= document.querySelector('#menu-bars')
const navbar= document.querySelector('.nav-bar')
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}) //the burger menu responsivness
let section= document.querySelectorAll('section')
let nav_links= document.querySelectorAll('header .nav-bar a')



window.onscroll = () =>{
    menu.classList.remove('fa-times');
     navbar.classList.remove('active');
     section.forEach(sec => {
       let top=window.scrollY;
       let height=sec.offsetHeight;
       let offset=sec.offsetTop -150;
       let id= sec.getAttribute('id')
       if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .nav-bar a[href*='+id+']').classList.add('active');
        });
      };
     });
}


document.querySelector('#search').onclick= ()=>{
    document.querySelector("#search-form").classList.toggle('active')
}
document.querySelector('#close').onclick= ()=>{
    document.querySelector('#search-form').classList.remove('active')
}   

// slider javascript for home page
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  //slider js for review page
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  // for loader animaiton
  // function loader(){
  //   document.querySelector('.loader-container').classList.add('fade-out');
  // }
  
  // function fadeOut(){
  //   setInterval(loader, 4000);
  // }
  
  // window.onload = fadeOut;
  // $(window).on("load", ()=>{
  //   $(".loader-container").fadeOut("slow")
  // });
