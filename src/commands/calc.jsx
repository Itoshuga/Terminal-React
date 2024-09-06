const calc = {
    description: "Calculates a mathematical expression",
    usage: "calc [expression]",
    execute: (args) => {
      if (args.length === 0) {
        return "Please provide a mathematical expression.";
      }
  
      const expression = args.join(' ');
  
      try {
        // Utiliser eval pour évaluer l'expression mathématique
        const result = eval(expression);
        return `Result: ${result}`;
      } catch (error) {
        return "Invalid mathematical expression.";
      }
    },
  };
  
  export default calc;
  