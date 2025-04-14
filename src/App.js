// src/App.js
import React from "react";
import Partners from "./Components/Partners";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello, React Developer! 🚀</h1>
      <p>Welcome to your new React app.</p>

      {/* Uncomment this to display the Partners component */}
      <Partners />
    </div>
  );
}

export default App;
