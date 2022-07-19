window.addEventListener('load', () => {
let lon
let lat

let temperaturaValor = document.getElementById('temperatura.valor');
let temperaturaDescripcion = document.getElementById('temperatura.descripcion');

let ubicacion = document.getElementById('ubicacion') ;
let iconoAnimado = document.getElementById('iconoanimado');

let vientoVelocidad = document.getElementById('vientovelocidad') ;


 if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion => {
    console.log(posicion)
    lon = posicion.coords.latitude ;
    lat = posicion.coords.longitude ;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=4359c25de07142350aec32c7ad9848e3`
    console.log(url)
    fetch(url)
    .then( response => {return response.json() })
    .then(data => {
       
        let temp = Math.round(data.main.temp)
        temperaturaValor.textContent= `${temp} °C ` ;

        let desc = data.weather[0].description ;
        temperaturaDescripcion.textContent = desc.toUpperCase() ;

        let name = data.name ;
        ubicacion.textContent = name ;

        console.log(data.wind.speed)

        let wind = data.wind.speed ;
        vientoVelocidad.textContent = `${wind} Km/h`

        console.log(data.weather[0].main)
        switch (data.weather[0].main) {
            case 'Thunderstorm':
                iconoAnimado.src='animated/thunder.svg'
                console.log('TORMENTA');
                break;
              case 'Drizzle':
                iconoAnimado.src='animated/rainy-2.svg'
                console.log('LLOVIZNA');
                break;
              case 'Rain':
                iconoAnimado.src='animated/rainy-7.svg'
                console.log('LLUVIA');
                break;
              case 'Snow':
                iconoAnimado.src='animated/snowy-6.svg'
                  console.log('NIEVE');
                break;                        
              case 'Clear':
                  iconoAnimado.src='animated/day.svg'
                  console.log('LIMPIO');
                break;
              case 'Atmosphere':
                iconoAnimado.src='animated/weather.svg'
                  console.log('ATMOSFERA');
                  break;  
              case 'Clouds':
                  iconoAnimado.src='animated/cloudy-day-1.svg'
                  console.log('NUBES');
                  break;  
              default:
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('por defecto');
            
        }


    })

    .catch(err => {
        console.log(err)
    })


    })

 }

});


