let change = document.querySelector('.weather__change')
let submit = document.querySelector('.input__submit')
let weather = document.querySelector('.weather')
let input = document.querySelector('.input')
let inputField = document.querySelector('.input__field')
let error = document.querySelector('.error')
let ToError = document.querySelector('.footer__text')
let errorButton = document.querySelector('.error__button')
let city = document.querySelector('.weather__city')
let temp = document.querySelector('.weather__temp')
let icon = document.querySelector('.weather__img')
let api = 'd47083b2cf007ead6de0f6fb9902daf3'

change.addEventListener('click', () => {
    input.classList.remove('dnone')
    weather.classList.add('dnone')
})

submit.addEventListener('click', (event) => {
    event.preventDefault()
    input.classList.add('dnone')
    weather.classList.remove('dnone')

    if (inputField.value != '') {
        console.log(inputField.value);
        console.log(getWeather(inputField.value));
        city.innerText = getWeather(inputField.value).weather[0].description + inputField.value
    }
})

ToError.addEventListener('click', (event) => {
    event.preventDefault()
    input.classList.add('dnone')
    error.classList.remove('dnone')
    weather.classList.add('dnone')
})

errorButton.addEventListener('click', () => {
    error.classList.add('dnone')
    input.classList.remove('dnone')
})

async function getWeather(cityName) {
    const geo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`)
    const data = await geo.json()
    // console.log(data);
    console.log(data.weather);
    
    if (data.weather != undefined) {
        city.innerText = data.weather[0].main + ' in ' + inputField.value
        temp.innerText = Math.round(data.main.temp - 273.15) + '℃'
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
    } else {
        input.classList.add('dnone')
        error.classList.remove('dnone')
        weather.classList.add('dnone')
    }

}
