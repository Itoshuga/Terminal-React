const smug = {
    description: "Displays a random smug anime gif",
    usage: "smug",
    execute: async () => {
      const apiUrl = 'https://nekos.life/api/v2/img/smug';
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (response.ok) {
          const imageUrl = data.url;
          return `<img src="${imageUrl}" alt="Smug Interaction" style="max-width: 300px; max-height: 300px;" />`; // Return image as HTML
        } else {
          return 'Could not retrieve the gif.';
        }
      } catch (error) {
        return `Failed to fetch gif. Error: ${error.message}`;
      }
    },
  };
  
export default smug;
  