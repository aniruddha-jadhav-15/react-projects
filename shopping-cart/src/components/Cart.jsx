import CartItem from "./CartItem";

function Cart({ cart, handleRemove, totalPrice }) {
  console.log(cart);

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} handleRemove={handleRemove} />
      ))}
      {cart.length > 0 ? <p>TotalPrice:{totalPrice.toFixed(2)}</p> : ""}
    </>
  );
}

export default Cart;
