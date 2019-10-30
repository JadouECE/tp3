
// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";

// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const city = document.getElementById("city-input").value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });


}

function getThreeDaysForecast() {

    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}&cnt={4}`, {
      crossdomain: true
    })

     // Retourne l'element HTML de l'icon symbolisant la méteo.
      getHTMLElementFromIcon(icon){
        return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
      }

}
