function SearchBar({ searchInput, handelInputSerch }) {
  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          value={searchInput}
          onChange={handelInputSerch}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
}

export default SearchBar;
