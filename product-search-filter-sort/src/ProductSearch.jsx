import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const featchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  //   Handles

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    featchProducts();
  }, []);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Somting Went Worng!</p>;

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((product) =>
      category === "all" ? true : product.category === category,
    );

  const sortedProducts = [...filteredProducts];
  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <SearchInput search={search} handleSearch={handleSearch} />
      <Filter uniqueCategories={uniqueCategories} handleFilter={handleFilter} />
      <Sort sort={sort} handleSort={handleSort} />
      <ProductList products={sortedProducts} />
    </>
  );
}

export default ProductSearch;
