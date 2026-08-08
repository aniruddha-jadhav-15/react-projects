import ProductCard from "./ProductCard";

function ProductList({ products, handleAddToCart }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} handleAddToCart={handleAddToCart} />
        </div>
      ))}
    </>
  );
}

export default ProductList;
