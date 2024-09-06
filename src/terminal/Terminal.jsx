import React, { useState, useRef, useEffect } from 'react';
import { handleInput } from '../utils/handleInput';
import { handleKeyDown } from '../utils/handleKeyDown';
import { handleAutocomplete } from '../utils/handleAutocomplete';
import { handleCommand } from '../utils/handleCommand';

import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const handleInputChange = (e) => {
    handleInput(e, setInput, (value) => 
      handleAutocomplete(value, setSuggestions, setSelectedSuggestionIndex)
    );
  };

  const handleKeyDownChange = (e) =>
    handleKeyDown(
      e,
      input,
      setInput,
      suggestions,
      selectedSuggestionIndex,
      setSuggestions,
      setSelectedSuggestionIndex,
      handleCommandWithOutput
    );

  const handleCommandWithOutput = (command) => handleCommand(command, setOutput);

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="terminal">
      <div className="output" ref={outputRef}>
        {output.map((line, index) => {
          const lineContent = typeof line === 'string' ? line : String(line);
          return lineContent.split('\n').map((subline, subIndex) => (
            <div key={`${index}-${subIndex}`} dangerouslySetInnerHTML={{ __html: subline }} />
          ));
        })}
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion ${index === selectedSuggestionIndex ? 'selected' : ''}`}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      <div className="input-container">
        <span className="terminal-symbol">C:/</span>
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDownChange}
          placeholder="Type a command (example: help)"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;