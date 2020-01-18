import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MusicList, MusicView } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={MusicList} />
        <Route exact path={"/song/:songId"} component={MusicView} />
      </Switch>
    </Router>
  );
}

export default App;
