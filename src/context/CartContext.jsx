import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  
    toast.success(`${product.name} added to cart`);
  };
  
  
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
    toast.info(`Item removed from cart`);
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if quantity is 0
    );
  };
  
  

  return (
    <CartContext.Provider
  value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
>

      {children}
    </CartContext.Provider>
  );
}
