function Sort({ sort, handleSort }) {
  return (
    <>
      <select id={sort} name="sort" onChange={handleSort}>
        <option value="">Default</option>
        <option value="low">Low → High</option>
        <option value="high"> High → Low</option>
      </select>
    </>
  );
}

export default Sort;
