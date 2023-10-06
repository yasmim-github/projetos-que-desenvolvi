const $City_Input = document.querySelector("#city-input");
const $Country_input = document.querySelector("#country-input");

console.log($Country_input.value);

const $Search_btn = document.querySelector("#search");

const API_KEY = "2192614fe7bdfeca2d041566f64bb1f4";            // precisamos salvar nossa API_KEY caso a nossa API seja privada
const FLAG_API_URL = `https://flagsapi.com/${""}/flat/32.png`; // Url da API de bandeiras

const $City_Element = document.querySelector("#city");
const $Temp_Element = document.querySelector("#temperature span");
const $Feels_Element = document.querySelector("#feelstemp span");

const $Desc_Element = document.querySelector("#description");
const $Weather_Icon = document.querySelector("#weather-icon");
const FLAG_Element = document.querySelector("#countryFlag");
const $Umid_Element = document.querySelector("#umidity span");
const $Wind_Element = document.querySelector("#wind span");

//functions

const getWeatherData = async(City,Country) => { // precisamos de uma async para requisitar dados de uma API (pois devemos esperar os dados)


console.log(Country);

    let API_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=metric&appid=${API_KEY}&lang=pt_br`;

    if(Country == "<empty string>" ){
        API_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${API_KEY}&lang=pt_br`;
    }else{
        API_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=metric&appid=${API_KEY}&lang=pt_br`;
    }

    const res = await fetch(API_WEATHER_URL); //esperar o fetch do Endpoint
    const data = await res.json();
    console.log(data);

    return data

} 

const showWeatherData = async (City,Country) => {  

    const data = await getWeatherData(City,Country);


    $City_Element.innerHTML = data.name;
    $Temp_Element.innerHTML = parseInt(data.main.temp);
    $Feels_Element.innerHTML = parseInt(data.main.feels_like);
    $Desc_Element.innerHTML = data.weather[0].description;
    $Weather_Icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $Wind_Element.innerHTML = data.wind.speed;
    $Umid_Element.innerHTML = `${data.main.humidity}%`;


    FLAG_Element.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/32.png`);

    //FLAG_Element.setAttribute("src", FLAG_API_URL);

}

// como nós queremos pegar dados de uma função assíncrona, também precisamos tonrar esta função assícronona afinal uma vez que uma função "normal" depende de outra async, seu comportamento acaba se tornando async e não funcionaria se não estivesse assíncrona "exemplo : para obter o data = getWeatherData a func PRECISA esperar a func assíncrona, senão o valor da variável seria NULL ;)"

//events

$Search_btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const City = $City_Input.value;
    const Country = $Country_input.value;
    
    showWeatherData(City,Country);

})