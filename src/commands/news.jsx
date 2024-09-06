// commands/news.js
const news = {
    description: "Displays the latest news headlines",
    usage: "news [country]",
    execute: async (args) => {
      const country = args[0] || 'fr'; // Par défaut, utilise 'us' si aucun pays n'est fourni
      const apiKey = import.meta.env.VITE_NEWS_API; // Remplace par ta clé API NewsAPI
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (response.ok && data.articles) {
          const headlines = data.articles.slice(0, 5).map((article, index) => 
            `${index + 1}. ${article.title} - ${article.source.name}`
          ).join('\n');
  
          return `Latest News:\n${headlines}`;
        } else {
          return `Failed to fetch news: ${data.message}`;
        }
      } catch (error) {
        return `Error fetching news: ${error.message}`;
      }
    },
  };
  
  export default news;
  