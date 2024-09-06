import { handleAutocomplete } from './handleAutocomplete';

export const handleInput = (e, setInput, handleAutocomplete) => {
  const value = e.target.value;
  setInput(value);
  handleAutocomplete(value); // Cette fonction doit utiliser les setters définis dans Terminal.jsx
};
