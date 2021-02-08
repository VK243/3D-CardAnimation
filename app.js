
// movement animation
 const card = document.querySelector(".card");
 const container = document.querySelector(".container");

//Items that Pops
const title = document.querySelector(".title");
const watch = document.querySelector(".watch img");
const purchase = document.querySelector(".purchase button");
const color = document.querySelector(".color");
const description = document.querySelector(".info h3");

 //Moving animation event
 container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = 'rotateY('+xAxis+'deg) rotateX('+yAxis+'deg)';
 });

 //Animate in
 container.addEventListener("mouseenter", e => {
     card.style.transition = 'none';

     //Popout
     title.style.transform = 'translateZ(50px)';

     watch.style.transform = 'translateZ(80px) rotateZ(10deg)';

     purchase.style.transform = 'translateZ(50px)';

     color.style.transform = 'translateZ(50px)';

     description.style.transform = 'translateZ(50px)';
 });

 //Animate out
 container.addEventListener("mouseleave", e => {
    card.style.transition = 'all 0.5s ease';
     card.style.transform = 'rotateY(0deg) rotateX(0deg)';

     //Popin
     title.style.transform = 'translateZ(0px)';

     watch.style.transform = 'translateZ(0px) rotateZ(0deg)';

     purchase.style.transform = 'translateZ(0px)';

     color.style.transform = 'translateZ(0px)';

     description.style.transform = 'translateZ(0px)';
 });

