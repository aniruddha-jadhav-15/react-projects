export default function CartItem({ item, handleRemove }) {
  return (
    <>
      <h2>🛒 Cart</h2>

      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => handleRemove(item.id)}>Remove</button>
    </>
  );
}
