import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  // Step 1: Set up state to manage the message
  const [message, setMessage] = useState("");

  // Step 2: Function to handle button click
  const handleClick = () => {
    setMessage("You clicked the button! 🎉");
  };

  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to Hackhazards 2025!</h1>
        <p>This is your starting point for building the best web app. 🚀</p>

        {/* Step 3: Add a button */}
        <button 
          onClick={handleClick} 
          style={styles.button}
        >
          Click Me
        </button>

        {/* Step 4: Display the message */}
        {message && <p style={styles.message}>{message}</p>}
      </main>
    </div>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "20px 0",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    color: "#007bff",
    fontSize: "18px",
    marginTop: "20px",
  },
};

export default App;