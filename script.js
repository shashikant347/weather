
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "863242cfb2b1d357e6093d9a4df19a4b" ;





async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`)
  var data = await response.json();
  
  console.log(data)
  
}



let input = document.querySelector('#input')

let searchbutton = document.querySelector('#searchBTN')

document.querySelector('.city-name').innerHTML= data.name
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';
document.querySelector('.humidity').innerHTML= main.humidity + '%';
document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

searchbutton.addEventListener('click',()=>{
  checkWeather(input.value);
  
})






