
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95ea64da1emsh9875b4d7e54cd4bp14fac9jsn7c95aa0671dd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};





const getweather=(city)=>{

 

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
    temp.innerHTML=response.temp;
    max.innerHTML=response.max_temp;
     min.innerHTML=response.min_temp;
    hum.innerHTML=response.humidity;
    //console.log(response);
  })
	.catch(err => console.error(err));
  
    
 

  
}

var but=document.getElementById("but");

   but.addEventListener("click",()=>
   {
    getweather(city.value);
   })

