class UI {
    constructor() {
        this.location = document.getElementById('w-location');

        this.desc = document.getElementById('w-desc');

        this.string = document.getElementById('w-string');

        this.detalis = document.getElementById('w-details');

        this.icon = document.getElementById('w-icon');

        this.humidity = document.getElementById('w-humidity');

        this.feelsLike = document.getElementById('w-feels-like');

        this.wind = document.getElementById('w-wind');
    }

    paint(w) {

        this.location.textContent = w.name;
        this.desc.textContent = w.weather[0].description;
        this.string.textContent = `${w.main.temp} °C`
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`)
        this.humidity.textContent = `Wilgotność powietrza: ${w.main.humidity}%`;
        this.feelsLike.textContent = `Odczuwalna temperatura : ${w.main.feels_like} °C`;
        this.wind.textContent = `Prędkość wiatru : ${w.wind.speed} m/s`;

    }
}