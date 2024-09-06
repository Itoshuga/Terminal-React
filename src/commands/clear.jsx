const clear = {
  description: "Clears the terminal screen",
  usage: "clear",
  execute: async () => {
    return { clear: true }; // Indique au terminal de vider l'output
  },
};

export default clear;
