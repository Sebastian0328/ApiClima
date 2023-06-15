
const result = document.querySelector(".info")
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
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b9d58e1e7148fe386bd34a5098fda83`);
    const data2 = await response2.json()
    
    const tempDay2=data2.list[1].main.temp
    const kelvin2= kelvinToC(tempDay2)
    const img2=data2.list[1].weather[0].icon
    const fecha2=data2.list[1].dt_txt
    

    const tempDay3=data2.list[9].main.temp
    const kelvin3= kelvinToC(tempDay3)
    const img3=data2.list[9].weather[0].icon
    const fecha3=data2.list[9].dt_txt

    const tempDay4=data2.list[17].main.temp
    const kelvin4= kelvinToC(tempDay4)
    const img4=data2.list[17].weather[0].icon
    const fecha4=data2.list[17].dt_txt
    fecha4.slice(0,10);
    

    const clima = data.main.temp
    const kelvin = kelvinToC(clima)
    const icon = data.weather[0].icon
    const viento = data.wind.speed
    const speed = kilometroporhora(viento)



    function kelvinToC(clima) {
        return parseInt(clima - 273.15)
    }
    kelvinToC(clima)
    function kilometroporhora(viento) {
        return parseInt(viento * 3.6)

    }
    kilometroporhora()
    result.innerHTML = ` <div class="result">
    <p class="name">${data.name}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <h2>${kelvin}°C</h2>
    <p>velocidad del viento: ${speed} m/s</p>
    </div>
    <div class="daysThree">
            <div>
                <p>${data.name}</p>
                <img src="https://openweathermap.org/img/wn/${img2}@2x.png" alt="">
                <p>${kelvin2}°C</p>
                <p>${fecha2.slice(0,10)}</p>
            </div>
            <div>
                <p>${data.name}</p>
                <img src="https://openweathermap.org/img/wn/${img3}@2x.png" alt="">
                <p>${kelvin3}°C</p>
                <p>${fecha3.slice(0,10)}</p>
            </div>
            <div>
                <p>${data.name}</p>
                <img src="https://openweathermap.org/img/wn/${img4}@2x.png" alt="">
                <p>${kelvin4}°C</p>
                <p>${fecha4.slice(0,10)}</p>
            </div>
        </div>
    `
}
// async function moredays(city) {
//     const res= await fetch(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b9d58e1e7148fe386bd34a5098fda83`)
//     const moreDaysData= await res.json()
//     console.log(moreDaysData);
    
// }
