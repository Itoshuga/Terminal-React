import { commands } from '../commands';

export const handleAutocomplete = (inputValue, setSuggestions, setSelectedSuggestionIndex) => {
  if (!inputValue) {
    setSuggestions([]);
    setSelectedSuggestionIndex(-1);
    return;
  }

  const matchingCommands = Object.keys(commands).filter((cmd) => cmd.startsWith(inputValue));
  setSuggestions(matchingCommands);
  setSelectedSuggestionIndex(matchingCommands.length > 0 ? 0 : -1);
};
