function Filter({ uniqueCategories, handleFilter }) {
  return (
    <>
      <select id="category" name={uniqueCategories} onChange={handleFilter}>
        <option value="all">All</option>
        {uniqueCategories.map((cat) => {
          return (
            <option key={cat} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Filter;
