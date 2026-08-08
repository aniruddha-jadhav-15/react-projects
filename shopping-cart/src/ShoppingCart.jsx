import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
function ShoppingCart() {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((pro) => {
        if (pro.id === existingProduct.id) {
          return {
            ...pro,
            quantity: pro.quantity + 1,
          };
        }

        return pro;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    const filteredItems = cart.filter((item) => item.id !== id);
    setCart(filteredItems);
  };

  const totalPrice = cart.reduce(
    (acc, curVal) => acc + curVal.price * curVal.quantity,
    0,
  );

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <Cart cart={cart} handleRemove={handleRemove} totalPrice={totalPrice} />
    </>
  );
}

export default ShoppingCart;
