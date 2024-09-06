import { commands } from '../commands';

export const handleCommand = async (command, setOutput) => {
  const [cmd, ...args] = command.trim().split(' ');
  if (commands[cmd]) {
    try {
      const result = await commands[cmd].execute(args);

      if (result && result.clear) {
        setOutput([]); // Efface le contenu de l'output
      } else {
        setOutput((prevOutput) => [...prevOutput, `> ${command}`, result]);
      }
    } catch (error) {
      setOutput((prevOutput) => [...prevOutput, `> ${command}`, `Error: ${error.message}`]);
    }
  } else {
    setOutput((prevOutput) => [...prevOutput, `> ${command}`, 'Command not found']);
  }
};
