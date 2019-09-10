const getWeatherData = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e121f235d5e789b4763db2bdb5c1530e`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);
};

export default getWeatherData;
