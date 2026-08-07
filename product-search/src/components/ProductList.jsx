function ProductList({ filteredProducts }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="rounded-lg bg-white p-4 shadow transition hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto mb-4 h-48 w-full object-contain"
          />

          <h2 className="mb-2 line-clamp-2 font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="mb-2 text-lg font-bold text-green-600">
            ${product.price}
          </p>

          <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600">
            {product.category}
          </span>
        </div>
      ))}

      {filteredProducts.length === 0 && (
        <p className="py-10 text-center text-lg text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductList;
