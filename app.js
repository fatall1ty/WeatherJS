//Init weather object
const weather = new Weather('Biała Podlaska', 'PL');

//Init UI
const ui = new UI(weather);
// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather().then(results => {
            Uint16Array,
            ui.paint(results);
        })
        .catch(err => {
            console.log(err)
        });
}