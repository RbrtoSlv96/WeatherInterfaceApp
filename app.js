const openweathermaps_key = "5fc119390310fa925f5385956d31c26a"

function searchWeather() {
    var lat = $("#paw-form-lat").val() //document.getElementById('paw-form-lat').value;
    var lon = $("#paw-form-lon").val()  //document.getElementById('paw-form-lon').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            var currentWeather = weatherObject["weather"][0]["description"];
            document.getElementById("paw-results-row").style.display = "block";
            document.getElementById("Results").innerHTML = currentWeather;
        }
    }

    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
    storeNumbers()
}

function storeNumbers(){
    localStorage.setItem("lat", $("#paw-form-lat").val())
    localStorage.setItem("lon", $("#paw-form-lon").val())
}

document.getElementById('paw-form-lat').value = localStorage.getItem("lat")
document.getElementById('paw-form-lon').value = localStorage.getItem("lon")

$("#paw-form-searchWeather").click(searchWeather)