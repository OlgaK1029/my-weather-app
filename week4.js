function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML =
        response.data.weather[0].main;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
}
function search(city) {
    let apiKey = "76542500a199028961e342e345cdeb07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#serch-text-input").value;
    search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}`;

search("New York");
