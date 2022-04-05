var lon
var lat

window.addEventListener('load', () => {
   

    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            
         
            

            
        })
    }
    
})

function mostrarTiempo() {
    let nombreLugar = document.getElementById("nombreLugar");
    let temperaturaValor = document.getElementById("temperaturaValor");
    let humedadValor = document.getElementById("humedadValor");
    let vientoValor = document.getElementById("vientoValor");
    let iconoMostrar = document.getElementById("iconoMostrar");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e10ecf0fad4eb7577706c905686f8ee`;
    console.log(url);
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {




            temperaturaValor.textContent = data.main.temp



            nombreLugar.textContent = data.name


            vientoValor.textContent = data.wind.speed
            humedadValor.textContent = data.main.humidity

            let iconCode = data.weather[0].icon
            const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
            iconoMostrar.src = urlIcon




        })
        .catch(error => {
            console.log(error)
        })
}