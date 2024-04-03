
// const apiKey = "5d439a9b1afdc6ede482dacc49b58261 ";
const apiKey = "5d439a9b1afdc6ede482dacc49b58261 ";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=;"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// search & input data as --- city name 
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

// async fun {await}
async function checkWeather(city) {
 const response = await fetch(apiUrl + city +`&appid=${apiKey}`) 
 console.log( data)

//  check error msg
if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
}
else{
    //    copy all data inside it
    var data = await response.json();  

//  data lena by name in -> input (updation)------------ console se milegi info 
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML=  Math.round(data.main.temp )+ "°C";
document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

// (img updation )acco...( weather )condition 
if(data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png" 
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png" 
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png" 
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png" 
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png" 
}

  //  city enter krne pr dispay dikhe 
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none"
}
 
}


// click on search btn 
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
// checkWeather()
