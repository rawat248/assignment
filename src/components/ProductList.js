import React, { useEffect, useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <div className="items">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.image} alt="title" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{user.title}</h3>
                <p className="card-description">{user.description}</p>
                <span className="card-rating">{user.rating.rate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
