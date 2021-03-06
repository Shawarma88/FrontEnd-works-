const textAnim = document.querySelectorAll('.container span');

textAnim.forEach((span) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });

    span.addEventListener('animationend', (e)=>{
        e.target.classList.remove('active');
    });

    
    setTimeout(()=>{
        span.classList.add('active');
    }, 750)

});

