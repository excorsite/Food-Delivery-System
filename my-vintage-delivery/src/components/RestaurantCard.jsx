import React from "react";
import "../styles/RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-card-image"
      />
      <div className="restaurant-card-content">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-card-cuisine">{restaurant.cuisine}</p>
        <div className="restaurant-card-details">
          <p>
            <strong>Rating:</strong> {restaurant.rating} ★
          </p>
          <p>
            <strong>Delivery:</strong> {restaurant.deliveryTime}
          </p>
          <p>
            <strong>Min. Order:</strong> Rs{restaurant.minOrder}
          </p>
        </div>
      </div>
      <div className="restaurant-card-actions">
        <button className="order-now-btn">View Menu & Order</button>
      </div>
    </div>
  );
}

export default RestaurantCard;
