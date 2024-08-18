import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Context } from "./Context";

function App() {

  const { setUser } = useContext(Context);

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
        <h1 className="text-3xl font-bold">Travel Wish List</h1>
        <NavBar />
      </header>

    </div>
  )
}

export default App;
