const anime = {
  description: "Displays basic information about a specified anime",
  usage: "anime [anime name]",
  execute: async (args, updateOutput) => {
    if (args.length === 0) {
      return "Please provide an anime name. Usage: anime [anime name]";
    }

    const animeName = args.join(' ');
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeName)}&limit=1`;

    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const animeInfo = data.data[0];
        const { title, synopsis, episodes, score, url } = animeInfo;

        return `Anime: ${title}\nEpisodes: ${episodes || 'N/A'}\nScore: ${score || 'N/A'}\nSynopsis: ${synopsis || 'No synopsis available.'}\nMore info: ${url}`;
      } else {
        return `Could not find information for anime: ${animeName}`;
      }
    } catch (error) {
      return `Failed to fetch anime data. Error: ${error.message}`;
    }
  },
};

export default anime;
