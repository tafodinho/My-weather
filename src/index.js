import getWeatherData from './weather' 

const inputForm = document.getElementById("search-box")
const city = document.getElementById("city-text").value

inputForm.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        console.log(e.keyCode, city)
        getWeatherData(city).then((data) => {
            console.log(data)
        })
    }
})