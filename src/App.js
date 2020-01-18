import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MusicList, MusicView } from "./pages";
import { getPath, PATHS } from "./navigation/utils";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={getPath()} component={MusicList} />
        <Route
          exact
          path={getPath(`${PATHS.song}/:songId`)}
          component={MusicView}
        />
      </Switch>
    </Router>
  );
}

export default App;
