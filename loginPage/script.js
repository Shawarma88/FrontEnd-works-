const signIn = document.querySelector('#signInButton');
const signUp = document.querySelector('#signUpButton');
const overlay_container = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');

signIn.addEventListener('click', ()=>{
    overlay_container.style.transform= 'translateX(100%)';
    overlay.style.transform= 'translateX(-50%)';
});

signUp.addEventListener('click', ()=>{
    overlay_container.style.transform= 'translateX(0)';
    overlay.style.transform= 'translateX(0)';
});


