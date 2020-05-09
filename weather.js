class Weather {
    constructor(city, state) {
        this.apikey = 'a5158153b847d5e763c12d38d0195539';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}&lang=pl&units=metric`);
        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;

    }
}