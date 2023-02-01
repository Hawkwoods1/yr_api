

function sendRequest() {
    
    let dromtorp_lat = "59.7158";
    let dromtorp_lon = "10.8674";

    let YrRequestDromtorp = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+dromtorp_lat+'&lon=11'
   fetch(YrRequestDromtorp)
   .then((Response) => Response.json())
   .then((vaerdata) => 
   showWeather(vaerdata)
)};

function showWeather(vaerdata) {
    console.log(vaerdata);
    console.log(vaerdata.properties.timeseries[0].data.instant.details.air_temperature);
    let temp_now = vaerdata.properties.timeseries[0].data.instant.details.air_temperature;

    document.getElementById("temperature").innerHTML = temp_now+" celsius";

    console.log(vaerdata.properties.timeseries[0].data.instant.details.relative_humidity);
    let humid = vaerdata.properties.timeseries[0].data.instant.details.relative_humidity;
    document.getElementById("humidity").innerHTML = humid+" %";


    console.log(vaerdata.properties.timeseries[0].data.instant.details.wind_speed);
    let speed = vaerdata.properties.timeseries[0].data.instant.details.wind_speed;
    document.getElementById("wind").innerHTML = speed+" m/s";

    console.log(vaerdata.properties.timeseries[0].data.instant.details.wind_from_direction);
    let direction = vaerdata.properties.timeseries[0].data.instant.details.wind_from_direction;
    document.getElementById("wind_direction").innerHTML = direction+" degrees" ;

    console.log(vaerdata.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level);
    let sea =vaerdata.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level;
    document.getElementById("pressure").innerHTML = sea+" hPa" ;

    console.log(vaerdata.properties.timeseries[0].data.instant.details.cloud_area_fraction);
    let area =vaerdata.properties.timeseries[0].data.instant.details.cloud_area_fraction;
    document.getElementById("cloud").innerHTML = area+" %" ;

    console.log(vaerdata.properties.timeseries[0].data.instant.details.precipitation_amount);
    let amount =vaerdata.properties.timeseries[0].data.instant.details.precipitation_amount;
    document.getElementById("precipitation").innerHTML = "Rain: "+amount ;
  
}