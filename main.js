
const result = document.querySelector(".result")
const form = document.querySelector("form")
const city = document.querySelector("#city")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (city.value === '') {
        result.innerHTML = `<p>No hay ningun valor escrito</p>
                                <p>Por favor escriba su ciudad</p>`;
        return

    }
    calApi(city.value)
})

async function calApi(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b9d58e1e7148fe386bd34a5098fda83`);
    const data = await response.json()
    console.log(data);
    result.innerHTML = `<h2>clima actual</h2>
    <p>${data.name}</p>
    <img src="" alt="">
    <p>velocidad del veinto</p>`
}