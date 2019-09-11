/* eslint-disable no-param-reassign */

const degreesToFahrenheit = (temp) => {
  const result = Math.round(((temp * (9 / 5)) + 32) * 100) / 100;
  return result;
};

const clearFields = () => {
  // document.getElementById('weather-info').style.display = 'block';
  document.getElementById('unit').innerHTML = '';
  document.getElementById('preasure').innerHTML = '';
  document.getElementById('temp').innerHTML = '';
  document.getElementById('city').innerHTML = '';
  document.getElementById('description').innerHTML = '';
  document.getElementById('country').innerHTML = '';
  document.getElementById('wind').innerHTML = '';
  document.getElementById('humidity').innerHTML = '';
  document.getElementById('preasure').innerHTML = '';
};

const renderWeatherDetails = (data, toggle) => {
  const tempValue = toggle ? degreesToFahrenheit(data.main.temp) : data.main.temp;
  const unit = toggle ? 'F' : 'C';
  document.getElementById('weather-info').style.display = 'block';
  document.getElementById('error').innerHTML = '';
  document.getElementById('unit').innerHTML = unit;
  document.getElementById('preasure').prepend(data.main.pressure);
  document.getElementById('temp').innerHTML = tempValue;
  document.getElementById('city').innerHTML = data.name;
  document.getElementById('description').innerHTML = data.weather[0].description;
  document.getElementById('country').innerHTML = data.sys.country;
  document.getElementById('wind').innerHTML = data.wind.speed;
  document.getElementById('humidity').innerHTML = data.main.humidity;
  document.getElementById('preasure').innerHTML = data.main.pressure;
};

const renderErrorPage = () => {
  clearFields();
  document.getElementById('weather-info').style.display = 'block';
  document.getElementById('error').innerHTML = 'Error loading location details';
};

export { renderWeatherDetails, renderErrorPage };
