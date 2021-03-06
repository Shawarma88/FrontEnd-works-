const container = document.querySelector('.container');
const card = document.querySelector('.card');
const xmas = document.querySelector('.x-mas');
const quotes = document.querySelector(".quotes");
const bottomPic = document.querySelector('.bottompic');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
    xmas.style.transform = 'translateZ(150px)';
    quotes.style.transform = 'translateZ(140px)';
    bottomPic.style.transform = 'translateZ(130px)';
})

container.addEventListener('mouseleave', (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform =  `rotateY(0deg) rotateX(0deg)`;
    xmas.style.transform = 'translateZ(0px)';
    quotes.style.transform = 'translateZ(0px)';
    bottomPic.style.transform = 'translateZ(0px)';
})