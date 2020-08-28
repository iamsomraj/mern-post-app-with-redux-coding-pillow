import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import MenuBarComponent from "./Components/View/MenuBarComponent";
import Posts from "./Components/Posts";
import PostCreate from "./Components/PostCreate";
import PostUpdate from "./Components/PostUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBarComponent />
        <Container className="mt-4">
          <Route path="/" exact component={Posts} />
          <Route path="/add" exact component={PostCreate} />
          <Route path="/update" exact component={PostUpdate} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
