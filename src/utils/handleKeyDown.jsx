export const handleKeyDown = (e, input, setInput, suggestions, selectedSuggestionIndex, setSuggestions, setSelectedSuggestionIndex, handleCommand) => {
  if (e.key === 'Enter') {
    handleCommand(input);
    setInput('');
    setSuggestions([]);
    setSelectedSuggestionIndex(-1);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    if (suggestions.length > 0 && selectedSuggestionIndex >= 0) {
      setInput(suggestions[selectedSuggestionIndex]);
      setSuggestions([]);
      setSelectedSuggestionIndex(-1);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (suggestions.length > 0) {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (suggestions.length > 0) {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    }
  }
};
