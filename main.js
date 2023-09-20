


let city;

let temp;
let humidity;
let wind ;


function getInput() {
    let c = document.getElementById("city-input").value;
    city = c;
    weather.fetchWeather();

    
    // let upper = c.toUpperCase();

    // let d = document.getElementById("dis-text").innerText = upper;
}


let a = document.getElementById("search-icon").addEventListener('click', getInput);
let b = document.getElementById("city-input").addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.code === "Enter") {
        let c = document.getElementById("city-input").value;
        city = c;
        weather.fetchWeather();
        // console.log(weather.displayWeather().temp);
        // let upper = c.toUpperCase();

        // let d = document.getElementById("dis-text").innerText = upper;
        // console.log(c);
    }
});

let weather = {
    
    apikey: "ea38b80f5146f244348d64e3e489a470" ,
    
    fetchWeather: function () {

      
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    
    displayWeather: function(data){
        
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        
        let final = city.toUpperCase();
        
        // console.log(temp , humidity, speed, icon,description);
        document.querySelector(".city-name").innerText = `Weather in ${final}`;
        document.querySelector(".temp-display").innerText = `${temp} °C`;
        
        document.querySelector(".wind").innerText = `Wind Speed : ${speed}%`;
        document.querySelector(".humidity").innerText = `Humidity : ${humidity}`;

        
    }
};