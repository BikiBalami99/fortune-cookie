import React, { useState, useEffect } from "react";
import Message from "./components/Message";
import SignUp from "./components/SignUp";

function App() {
  const [userName, setUserName] = useState("Stranger");

  console.log(userName.length);
  if (userName.length === 0) {
    return (
      <div className="App">
        <h1>Hello adventurer!</h1>
        <p>If you seek guidance, please give us your name below.</p>
        <SignUp userName={userName} setFullName={setUserName} />
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <h1>Hello {userName}</h1>
        <p>Your fortune today is:</p>
        <Message />
      </div>
      <button onClick={() => setUserName("")}>Retry</button>
    </div>
  );
}

export default App;
