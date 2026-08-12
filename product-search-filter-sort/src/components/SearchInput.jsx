function SearchInput({ search, handleSearch }) {
  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Serach By name"
        onChange={handleSearch}
      />
    </>
  );
}

export default SearchInput;
