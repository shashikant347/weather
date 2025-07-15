

const apiurl = "https://api.openweathermap.org/data/2.5/weather?q="
const apikey = "4bdceced7bd48b6ec3404f1ccbde833c" ;



let input = document.querySelector('#input')
let searchbutton = document.querySelector('#searchBTN')



async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`)
  var data = await response.json();
  
  console.log(data.wind.speed)
  
  
  document.querySelector('.city-name').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(((data.main.temp)-273.15)) +'°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('#wind').innerHTML = data.wind.speed + "km/h";

  
  
}




searchbutton.addEventListener('click',()=>{
  checkWeather(input.value);
  
})






