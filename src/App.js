import React from "react";
import "./App.css";

import UserCard from "./UserCard";

import contributors from "./contributors";

function App() {
  return (
    <>
      <h1 className="App__title">Codú Contributors</h1>
      <div className="App">
        
        <div className="App__card-container">
          {contributors.map(
            (contributor) => {
              return <UserCard key={contributor.id} />
            }
          )}
        </div>
      </div>
    </>
  );
}

export default App;
