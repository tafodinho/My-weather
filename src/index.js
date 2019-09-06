import { renderWeatherDetails, renderErrorPage } from './weather';
import getWeatherData from './request';

const inputForm = document.getElementById('search-box');
const toggleButton = document.getElementById('toggle');
let city = null;
let toggle = null;

inputForm.addEventListener('keypress', (e) => {
  city = document.getElementById('city-text').value;
  toggle = toggleButton.checked ? 1 : 0;

  if (e.keyCode === 13) {
    getWeatherData(city)
      .then((data) => {
        renderWeatherDetails(data, toggle);
      })
      .catch((error) => {
        renderErrorPage(error);
      });
  }
});

toggleButton.addEventListener('click', () => {
  toggle = toggleButton.checked ? 1 : 0;
  getWeatherData(city)
    .then((data) => {
      renderWeatherDetails(data, toggle);
    })
    .catch(() => {
      renderErrorPage();
    });
});
