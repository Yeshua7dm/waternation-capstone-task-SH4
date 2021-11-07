const SearchBar = ({ input, handleChange }) => {
  return (
    <main>
      <input type="text" value={input} onChange={handleChange} />
    </main>
  );
};

export default SearchBar;
