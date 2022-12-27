//connection url
let weatherAPIKey = 'f60f285bbf94aa221d0111239a0a9e34';
let weatherBase = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;

// async await
let weatherCity = async (city) => {
    let endpoint = weatherBase + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    
    return weather;
}

weatherCity(...city)
.then(weather => getWeather(weather))
.catch(err => console.log('rejected:', err.message));



function getWeather(weather){
    // // read temperature inside json
    const {name} = weather;
    const {temp} = weather.main;
    const {feels_like} = weather.main;
    const {temp_min} = weather.main;
    const {temp_max} = weather.main;
   
    // //display to my html
    var div = document.getElementById("div");
    
    div.innerHTML += `
        <h5 class="card-title">City,  ${name}</h5>
        <h6 class="card-subtitle mb-2">Current temperature: ${temp} °C</h6>
        <p class="card-text one">Feels Like: ${feels_like} °C</p>
        <p class="card-text two_min two_max">Max: ${temp_max} °C, Min: ${temp_min} °C</p>
        <div id="img-container"><img src="https://openweathermap.org/img/wn/04n@2x.png"></div>          
    `;
}

var searchInput = document.getElementById('city');
console.log(typeof(searchInput));
search.addEventListener('click', (e) => {
    e.preventDefault();
    if(searchInput !== ""){
    }
   
});