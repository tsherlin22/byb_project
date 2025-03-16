import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedName, setStoredName] = useState(""); // Store name only on login

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setStoredName("");
    } else if (name.trim() !== "") {
      setIsLoggedIn(true);
      setStoredName(name);
    }
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {storedName}!</h1>
          <button className="logout-btn" onClick={handleLoginLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="input-field"
          />
          <button
            className="login-btn"
            onClick={handleLoginLogout}
            disabled={name.trim() === ""}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

