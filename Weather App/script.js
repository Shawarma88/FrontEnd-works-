window.addEventListener('load', ()=>{
    let longitudeEl;
    let latitudeEl;
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');

    let degreeSection = document.querySelector('.degree-section');
    let degreeSpan = document.querySelector('.degree-section span');

    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitudeEl = position.coords.longitude;
            latitudeEl = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitudeEl},${longitudeEl}`;  

            

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                const {temperature, summary} = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                // setIcon(icon, document.querySelector('.icon'));

                let celsius = (temperature-32) * (5/9);
                degreeSection.addEventListener('click', ()=>{
                    if (degreeSpan.textContent === 'F'){
                        degreeSpan.textContent = 'C';
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else{
                        degreeSpan.textContent = 'F';
                        temperatureDegree.textContent = temperature
                    }
                })
            });
        });
    } 

    //function setIcon(icon, iID){
       // const skycons = new Skycons({"color": "White"});
       // const currentIcon = icon.replace(/-/g, "_").toUpperCase();
       // skycons.play();
       // skycons.set("iID", Skycons[currentIcon]);}

});