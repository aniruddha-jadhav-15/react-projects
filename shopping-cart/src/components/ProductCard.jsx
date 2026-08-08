function ProductCard({ product, handleAddToCart }) {
  return (
    <>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
