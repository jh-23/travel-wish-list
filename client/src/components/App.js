import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/check_session').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])


  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

    </div>
  )
}

export default App;
