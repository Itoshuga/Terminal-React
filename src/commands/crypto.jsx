// commands/crypto.js
const crypto = {
  description: "Displays the current price of a cryptocurrency",
  usage: "crypto [currency]",
  execute: async (args) => {
    const currency = args[0]?.toLowerCase() || 'bitcoin'; // Par défaut, utilise 'bitcoin' si aucune monnaie n'est fournie
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data[currency]) {
        const price = data[currency].usd;
        return `The current price of ${currency} is $${price}`;
      } else {
        return `Failed to fetch price for cryptocurrency: ${currency}`;
      }
    } catch (error) {
      return `Error fetching cryptocurrency price: ${error.message}`;
    }
  },
};

export default crypto;
