import { getWeatherData, renderWeatherDetails } from './weather';

const inputForm = document.getElementById('search-box');


inputForm.addEventListener('keypress', (e) => {
  const city = document.getElementById('city-text').value;
  const container = document.getElementById('weather-info');
  const toggle = document.getElementById('toggle').checked ? 1 : 0;
  console.log(toggle);
  if (e.keyCode === 13) {
    getWeatherData(city).then((data) => {
      renderWeatherDetails(data, container, toggle);
    });
  }
});
