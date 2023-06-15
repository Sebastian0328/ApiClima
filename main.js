
const result = document.querySelector(".result")
const form = document.querySelector("form")
const city = document.querySelector("#city")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (city.value === '') {
        result.innerHTML = `<p id="alert">No hay ningun valor escrito</p>
                                <p id= "alert">Por favor escriba su ciudad</p>`;
        return

    }
    calApi(city.value)
})

async function calApi(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b9d58e1e7148fe386bd34a5098fda83`);
    const data = await response.json()
    console.log(data);
    const clima = data.main.temp
    const kelvin = kelvinToC(clima)
    const icon = data.weather[0].icon
    const viento = data.wind.speed
    const speed = kilometroporhora(viento)
    console.log(viento);


    function kelvinToC(clima) {
        return parseInt(clima - 273.15)
    }
    kelvinToC(clima)
    function kilometroporhora(viento) {
        return parseInt(viento * 3.6)

    }
    kilometroporhora()
    result.innerHTML = `<p class="name">${data.name}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <h2>${kelvin}°C</h2>
    <p>velocidad del veinto:${speed}</p>`
}
