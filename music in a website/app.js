let song = document.getElementById('audioo');
let icon = document.getElementById('tear');

icon.onclick = () =>{
    if(song.paused){
        song.play();
        icon.src = "images/fire.png";
    } else{
        song.pause();
        icon.src = "images/tears.png";
    }
        
    
}