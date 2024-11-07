const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () =>{
    const APIKey ='6ecefd11a96a9fda67ba43e2ae95006d';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(data => {
            console.log(data);
        const image = document.querySelector('.cardImg');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector(' .humidity span ');
        const wind = document.querySelector(' .wind span');


        temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}<span>C°</span>`
        description.innerHTML = data.weather[0].description
        humidity.innerHTML = data.main.humidity
        wind.innerHTML = data.wind.speed
        // 0<span>C°</span>
        switch(data.weather[0].main) {
            case 'Clear':
                image.style.backgroundImage = "url(./images/clear.png)"
                break;
            case 'Rain':
                image.style.backgroundImage = "url(./images/rain.png)"
                break;
            case 'Snow':
                image.style.backgroundImage = "url(./images/snow.png)"
                break;
            case 'Clouds':
                image.style.backgroundImage = "url(./images/cloud.png)"
                break;
            case 'Mist':
                image.style.backgroundImage = "url(./images/mist.png)"
                break;
            case 'Haze':
                image.style.backgroundImage = "url(./images/mist.png)"
                break;
    
           default:
            image.style.backgroundImage = "url(./images/clear.png)"

        }



     });
})
