import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      navigate(`/profile/${username}`);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <main className="home-main">
      <div className="home-container">
        <form onSubmit={handleSubmit}>
          {showError && <p className="input-error shaker">Please enter a valid Username.</p>}
          <input
            type="text"
            className="profile-input"
            placeholder="Enter Instagram Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setShowError(false);
            }}
          />
          <button type="submit" className="get-profile-button">
            View Profile
          </button>
        </form>
      </div>
    </main>
  );
};

export default Home;
