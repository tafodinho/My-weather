const getWeatherData = (city) => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e121f235d5e789b4763db2bdb5c1530e')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json
        })
}
export default getWeatherData;