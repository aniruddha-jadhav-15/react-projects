function ProductList({ products }) {
  return (
    <>
      {products.map((pro) => {
        return (
          <div key={pro.id}>
            <h2>{pro.title}</h2>

            <p>{pro.price}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
