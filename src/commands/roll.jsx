const roll = {
  description: "Rolls a virtual dice",
  usage: "roll [sides]",
  execute: (args) => {
    const sides = args.length > 0 ? parseInt(args[0], 10) : 6;
    if (isNaN(sides) || sides <= 0) {
      return "Please provide a valid number of sides.";
    }
    const result = Math.floor(Math.random() * sides) + 1;
    return `You rolled a ${result} (1-${sides})!`;
  },
};

export default roll;
