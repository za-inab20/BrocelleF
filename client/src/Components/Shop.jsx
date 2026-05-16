import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s7 from "../Images/s7.jpg";
import so6 from "../Images/so6.jpg";
import so2 from "../Images/so2.jpg";
import so10 from "../Images/so10.jpg";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Features/CartSlice";
import { submitOrder } from "../Features/CartSlice";

function ProductCard({ image, title, price, addItem }) {
  return (
    <div className="card text-center shadow-sm h-100">
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">OMR {price}</p>

        <button
          className="btn btn-outline-secondary"
          onClick={() => addItem({ title, price })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [showCart, setShowCart] = useState(false);

  // المنتجات الثابتة
  const products = [
    { image: s7, title: "Olive Oil Soap", price: "8.00" },
    { image: so6, title: "Milk Soap", price: "5.00" },
    { image: so10, title: "Rose Soap", price: "6.00" },
    { image: so2, title: "Orange Soap", price: "5.00" },
  ];

  // إضافة للكارت
  const addItem = (product) => {
    const itemWithId = {
      ...product,
      id: Date.now(), // 🔥 مهم للحذف الصحيح
    };

    dispatch(addToCart(itemWithId));
  };

  // حذف من الكارت
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // حساب المجموع
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <div>
      {/* Cart Icon */}
      <div className="position-fixed top-0 start-0 p-3" style={{ zIndex: 1050 }}>
        <button
          className="btn btn-primary d-flex align-items-center"
          onClick={() => setShowCart(!showCart)}
        >
          <FaShoppingCart />
          <span className="ms-2">{cartItems.length}</span>
        </button>
      </div>

      {/* Cart Drawer */}
      <div
        className="position-fixed top-0 start-0 bg-light shadow p-3"
        style={{
          width: "300px",
          height: "100%",
          transform: showCart ? "translateX(0)" : "translateX(-100%)",
          transition: "0.3s",
          zIndex: 1049,
        }}
      >
        <h5 className="text-center mb-4">Your Cart</h5>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.title}</strong>
                    <p className="mb-0">OMR {item.price}</p>
                  </div>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <h6 className="text-center">
              Total: OMR {calculateTotal()}
            </h6>
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() => dispatch(submitOrder())}
            >
              Submit Order
            </button>
          </>
        )}
      </div>

      {/* Main Shop */}
      <div className="container mt-5">
        <section className="text-center mb-5">
          <h1 className="fw-bold">ONLINE SHOP</h1>
          <p className="text-muted">
            Explore our natural soap collection made with love.
          </p>
        </section>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                addItem={addItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;