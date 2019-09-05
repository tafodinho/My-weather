import { getWeatherData, renderWeatherDetails } from './weather';

const inputForm = document.getElementById('search-box');


inputForm.addEventListener('keypress', (e) => {
  
  const city = document.getElementById('city-text').value;
  if (e.keyCode === 13) {
    getWeatherData(city).then((data) => {
        console.log(city);
      renderWeatherDetails(data);
      
    });
  }
});
