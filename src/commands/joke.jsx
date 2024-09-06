// commands/joke.js
const joke = {
  description: "Displays a random joke",
  usage: "joke",
  execute: async () => {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        if (data.type === 'single') {
          return data.joke; // Blague unique
        } else {
          return `${data.setup}\n${data.delivery}`; // Blague en deux parties
        }
      } else {
        return `Failed to fetch joke: ${data.message}`;
      }
    } catch (error) {
      return `Error fetching joke: ${error.message}`;
    }
  },
};

export default joke;
