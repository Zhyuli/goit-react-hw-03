import { useId } from 'react';

export const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className="searchBox">
      <label htmlFor={id}>Find contact by name</label>
      <input
        className="input"
        type="text"
        id={id}
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
