//declarations
let searchInput = document.getElementById('city');
let search = document.getElementById('search');
let city = document.getElementById('name');
let temperature = document.getElementById('temperature');
let feels_like = document.getElementById('feels_like')
let min_temp = document.getElementById('min')
let max_temp = document.getElementById('max')

//connection url
let weatherAPIKey = 'f60f285bbf94aa221d0111239a0a9e34';
let weatherBaseEndpoint  = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;

// async await
let weatherCity = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    } 

    let weather = await response.json();
    return weather;
}
//search weather
search.addEventListener('click', async (e) => {
    if(searchInput !== ""){
        let weather = await weatherCity(searchInput.value);
        displayWeather(weather);
    }else{
        alert("error")
    }
})

//display weather inside my html
let displayWeather = (data) => {
    city.innerHTML = data.name + ', ' + data.sys.country;
    temperature.innerHTML = "Current Temperature: " + data.main.temp + "°C";
    feels_like.innerHTML = "Feels Like: " + data.main.feels_like + "°C";
    max_temp.innerHTML = "Max Temperature: " + data.main.temp_max + "°C";
    min_temp.innerHTML = "Min Temperature: " + data.main.temp_min + "°C";
}