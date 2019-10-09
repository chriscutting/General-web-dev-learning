window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.degree');
  let locationTimezone = document.querySelector('.locationTimezone');

  if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `${proxy}https://api.darksky.net/forecast/3677d5dd0935023cfda26bb54ac2ae78/${lat},${long}`;

  fetch(api)
  .then(response => {
    return response.json();

  })
      .then(data => {

        const {temperature, summary, icon } =  data.currently;
        //Set up DOM from api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        //Set icon
        setIcons(icon, document.querySelector('.icon'));

});


    });



  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color:"white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
