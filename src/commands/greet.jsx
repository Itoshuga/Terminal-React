const greet = {
    description: "Greets the user with a name",
    usage: "greet [name]", // Ajouter le format d'utilisation
    execute: (args) => {
      if (args.length > 0) {
        return `Hello, ${args[0]}!`;
      }
      return 'Hello!';
    },
  };
  
  export default greet;
  