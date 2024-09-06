const weather = {
    description: "Displays the current weather for a specified city",
    usage: "weather [city]",
    execute: async (args) => {
      if (args.length === 0) {
        return "Please provide a city name. Usage: weather [city]";
      }
  
      const city = args.join(' ');
      const apiKey = import.meta.env.VITE_OPENWEATHER_API; // Remplacez par votre clé API OpenWeatherMap
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (response.ok) {
          const { main, weather, name } = data;
          const description = weather[0].description;
          const temp = main.temp;
          const feelsLike = main.feels_like;
          const humidity = main.humidity;
  
          return `Weather in ${name}:\n- ${description}\n- Temperature: ${temp}°C\n- Feels like: ${feelsLike}°C\n- Humidity: ${humidity}%`;
        } else {
          return `Could not retrieve weather data: ${data.message}`;
        }
      } catch (error) {
        return `Failed to fetch weather data. Error: ${error.message}`;
      }
    },
  };
  
  export default weather;
  