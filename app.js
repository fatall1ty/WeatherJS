//Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UI(weather);

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    getWeather();

    //Set location in LS
    storage.setLocationData(city, state)
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather().then(results => {
            Uint16Array,
            ui.paint(results);
        })
        .catch(err => {
            console.log(err)
        });
}