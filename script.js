async function getWeather() {

    const city = document.getElementById("city").value;

    const [latitude, longitude] = city.split(",");

    const url =
        "https://api.open-meteo.com/v1/forecast" +
        "?latitude=" + latitude +
        "&longitude=" + longitude +
        "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

    try {

        const response = await fetch(url);

        const data = await response.json();

        const current = data.current;

        document.getElementById("temperature").innerText =
            "Temperature: " +
            current.temperature_2m + " °C";

        document.getElementById("humidity").innerText =
            "Humidity: " +
            current.relative_humidity_2m + " %";

        document.getElementById("wind").innerText =
            "Wind Speed: " +
            current.wind_speed_10m + " km/h";

        document.getElementById("condition").innerText =
            "Current weather data available";

    }

    catch (error) {

        document.getElementById("condition").innerText =
            "Unable to get weather data.";

        console.log(error);
    }
}