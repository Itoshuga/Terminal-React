const holp = {
  description: "holp",
  usage: "holp", // Définir le format d'utilisation
  execute: (args) => {
    if (args) {
        return `holp`;
    } else {
        return `Command not found: ${cmd}`;
    }
  }
}

export default holp;
