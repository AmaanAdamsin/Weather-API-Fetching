let lon;
let lat;
let icon = document.querySelector(".icon");
let temperature = document.querySelector(".temperature");
let summary = document.querySelector(".summary");
let locat = document.querySelector(".location");
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //API ID
            const api = '13ae89d30c02154d1d55ec7b1474c6ac';

            //API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=13ae89d30c02154d1d55ec7b1474c6ac`;

            //CALLING THE API
            fetch(base)
                .then((respone => {
                    return respone.json();
                }))
                .then((data) => {
                    console.log(data);
                    temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    locat.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    // icon.innerHTML = `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
                });
        });
    }
});