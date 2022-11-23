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
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
};

const showWeatherData = async (city) =>{
   const data = await getWeatherData(city);

   cityElement.innerText = data.name;
   tempElement.innerText = parseInt(data.main.temp);
   descElement.innerText = data.weather[0].description;
   weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
   countryElement.setAttribute("src", apiCountryURL + data.sys.country);
   umidityElement.innerText = `${data.main.umidity}%`;
   windElement.innerText = `${data.wind.speed}km/h`;
};

//Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});