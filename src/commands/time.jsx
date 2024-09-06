const time = {
  description: "Displays the current date and time",
  usage: "time",
  execute: () => {
    const now = new Date();
    return `Current time: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`;
  },
};

export default time;
