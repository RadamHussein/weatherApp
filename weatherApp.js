var apiKey = "46b495d7d607133c6eb74242573ada96";

document.addEventListener("DOMContentLoaded", textFields);

function textFields(){
	var req = new XMLHttpRequest();
		document.getElementById("submit").addEventListener("click", function(event){
		var zipcode = document.getElementById("zip").value;
		var city = document.getElementById("city").value;
		var state = document.getElementById("state").value;

			if (zipcode == ""){
				console.log("using city and state");
				req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city +
					 "," + state + "&units=imperial&APPID=" + apiKey, true);
				
			}
			else{
				console.log("using zipcode");
    			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode +
    				 ",us&units=imperial&APPID=" + apiKey, true);
     		}

     		req.addEventListener("load", function(){
     			if (req.status >= 200 && req.status < 400){
    				console.log(JSON.parse(req.responseText));
					var response = JSON.parse(req.response);
 					document.getElementById("cityResults").textContent = "City: " + response.name;
    				document.getElementById("tempResults").textContent = "Current Temp: " + response.main.temp;
    				document.getElementById("windResults").textContent = "Wind: " + response.wind.speed + "mph";
    				document.getElementById("humidityResults").textContent = "Humidity: " + response.main.humidity + "%";
     			}
     			else {
     				console.log("401 error");
     			}
     		});
     		req.send(null);
     		event.preventDefault();	
     });
}





