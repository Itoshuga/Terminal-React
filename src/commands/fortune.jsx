const fortune = {
    description: "Displays a random fortune or thought of the day",
    usage: "fortune",
    execute: () => {
      const fortunes = [
        "You will have a great day today!",
        "Be kind, for everyone you meet is fighting a hard battle.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Do not take life too seriously. You will never get out of it alive.",
        "The journey of a thousand miles begins with one step."
      ];
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      return `Fortune: "${randomFortune}"`;
    },
  };
  
  export default fortune;
  