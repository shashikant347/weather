const apikey = 'sksoio'
const apiurl = 'hffh'





let input = document.querySelector('#input')

let searchbutton = document.querySelector('#searchBTN')

async function checkWeather() {
  const response = await fetch(apiurl+`&appid=${apikey}`)
  var data = await response.json();
  
}

