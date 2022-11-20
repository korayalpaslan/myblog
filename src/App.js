import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import Headline from "./components/Header/Headline";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import PostContainer from "./components/Posts/PostContainer";
import PostDetails from "./pages/PostDetails";
import News from "./pages/News";
import "./App.css";


function App() {
  return (
    <div>
      <header>
        <Headline />
        <MainHeader />
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/haberler">
            <News />
          </Route>
          <Route path="/sehirler" exact>
            <PostContainer />
          </Route>
          <Route path="/sehirler/:postId">
            <PostDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
