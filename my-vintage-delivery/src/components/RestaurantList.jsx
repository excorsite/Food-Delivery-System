import React from "react";
import RestaurantCard from "./RestaurantCard";

// Import placeholder images - user needs to replace these files
import restaurant1Placeholder from "../assets/images/jasper.jpg";
import restaurant2Placeholder from "../assets/images/noona.avif";
import restaurant3Placeholder from "../assets/images/cozy.jpg";

// Dummy Data
const dummyRestaurants = [
  {
    id: 1,
    name: "Jasper Restaurant",
    cuisine: "Classic American, Burgers",
    rating: 4.5,
    deliveryTime: "25-35 min",
    minOrder: 300,
    image: restaurant1Placeholder,
  },
  {
    id: 2,
    name: "Nonna Emilia's Kitchen",
    cuisine: "Authentic Italian, Pasta",
    rating: 4.8,
    deliveryTime: "30-40 min",
    minOrder: 250,
    image: restaurant2Placeholder,
  },
  {
    id: 3,
    name: "The Cozy Corner Cafe",
    cuisine: "Bakery, Sandwiches, Coffee",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: 180,
    image: restaurant3Placeholder,
  },
  // Add more restaurants following the same pattern
];

function RestaurantList() {
  // In a real app, restaurants would come from props or API
  const [restaurants, setRestaurants] = React.useState(dummyRestaurants);

  if (!restaurants.length) {
    return <p>No restaurants available at the moment.</p>;
  }

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2.5rem",
        }}
      >
        Our Featured Restaurants
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          paddingBottom: "30px",
        }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default RestaurantList;
