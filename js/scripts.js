//Variáveis e Seleção dos elementos
const apiKey = "161b6a38d422348d75fb526a70d0f1eb";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//Funções
const showWeatherData = (city) =>{
    console.log(city);
}

//Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});