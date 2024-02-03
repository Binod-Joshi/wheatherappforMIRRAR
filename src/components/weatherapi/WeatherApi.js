const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"

const WeatherApi = (loc) => `${URL}?q=${loc}&units=metric&cnt=7&appid=${API_KEY}`
   

// check also by using return

export default WeatherApi