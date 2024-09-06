const cat = {
  description: "Displays a random cat image",
  usage: "catimage",
  execute: async () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const imageUrl = data[0].url;
        return `<img src="${imageUrl}" alt="Random Cat" style="max-width: 300px; max-height: 300px;" />`; // Return image as HTML
      } else {
        return 'Could not retrieve a cat image.';
      }
    } catch (error) {
      return `Failed to fetch a cat image. Error: ${error.message}`;
    }
  },
};

export default cat;
