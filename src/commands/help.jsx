import { commands } from './index';

const help = {
  description: "Displays a list of available commands or details about a specific command",
  usage: "help [command]", // Définir le format d'utilisation
  execute: (args) => {
    if (args.length > 0) {
      const cmd = args[0];
      if (commands[cmd]) {
        return `<strong>${cmd}</strong>: ${commands[cmd].description}<br>Usage: ${commands[cmd].usage || 'No specific usage'}`;
      } else {
        return `Command not found: ${cmd}`;
      }
    }

    const availableCommands = Object.keys(commands)
      .sort()
      .map(cmd => `<strong>${cmd}</strong>: ${commands[cmd].description}`)
      .join('<br>');
    return `Available commands:<br>${availableCommands}`;
  },
};

export default help;
