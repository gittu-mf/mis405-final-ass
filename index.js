async function fetchCountryData() {
    let countryName = document.getElementById("countrySearch").value;
    let url = 'https://restcountries.com/v3.1/name/' + countryName;
    try {
        let response = await fetch(url);
        let data = await response.json();
        displayCountryData(data[0]);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchWeatherData(countryName) {
    let apiKey = '811eee0af8d5478499872727232012';
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${countryName}&aqi=no`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayCountryData(data) {
    const countryInfo = document.getElementById("countryInfo");
    countryInfo.innerHTML = `
        <h2>${data.name.common}</h2>
        <p>Capital: ${data.capital}</p>
        <p>Population: ${data.population}</p>
        <p>Region: ${data.region}</p>
        <button onclick="fetchWeatherData('${data.name.common}')">More Details</button>
    `;
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h3>Weather in ${data.location.name}</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;
}