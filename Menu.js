import React from 'react';

function Menu({ setCartCount }) {
  // Prevents error if prop isn't passed
  const safeSetCartCount = setCartCount || (() => {});

  const addToCart = () => {
    safeSetCartCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Menu</h2>
      <button onClick={addToCart}>Add Pizza to Cart</button>
    </div>
  );
}

export default Menu;
