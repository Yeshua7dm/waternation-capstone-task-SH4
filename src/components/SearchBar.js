const SearchBar = ({ input, handleChange, placeholder }) => {
  return (
    <main>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </main>
  );
};

export default SearchBar;
