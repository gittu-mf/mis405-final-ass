async function fetchWeather() {
    const countryInput = document.getElementById('countryInput').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=811eee0af8d5478499872727232012&q=${countryInput}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherCard = document.getElementById('weather-card');
        weatherCard.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c} &#8451;</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}