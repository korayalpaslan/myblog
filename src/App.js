import React from "react";
import { Route } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import Headline from "./components/Header/Headline";
import About from "./pages/About";
import Ansiklopedi from "./pages/Ansiklopedi";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
        <Headline/>
      </header>

      <main>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ansiklopedi">
          <Ansiklopedi />
        </Route>
      </main>
    </div>
  );
}

export default App;
