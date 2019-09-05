const getWeatherData = (city) => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e121f235d5e789b4763db2bdb5c1530e')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json
        })
}

const renderWeatherDetails = (data) => {
    const weatherDetailArea = document.getElementById("weather-info")
    const weatherHtmlDetails = `
        <div>
        <div class="detail">
            <h1>${data.main.temp}<sup>o</sup></h1>
            <h2>${data.weather[0].description}</h2>
            <h3>${data.name},  ${data.sys.country}</h3>
        </div>
        <div class="cards-section clearfix">
            <div class="wind">
                <img src="../assets/images/breeze.svg" alt="" height="100px" width="75px">
                <p>${data.wind.speed} km/h</p>
                <p>Wind</p>
            </div>
            <div class="humidity">
                <img src="../assets/images/preasure.svg" alt="" height="100px" width="75px">
                <p>${data.main.humidity}%</p>
                <p>Humidity</p>
            </div>
            <div class="preasure">
                <img src="../assets/images/humidity.svg" alt="" height="100px" width="75px">
                <p>${data.main.pressure} Hpa</p>
                <p>Atm. Preasure</p>
            </div>
        </div>
        </div>
    `
    weatherDetailArea.innerHTML = weatherHtmlDetails
}
export {getWeatherData, renderWeatherDetails};