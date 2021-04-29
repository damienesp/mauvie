import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Community from "./pages/Community";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navigation from "./components/Navigation";
import NavSearch from "./components/NavSearch";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import Top from "./pages/Top";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Redirect from="/" to="/home" />
        <ScrollToTop />
        <Navigation />
        <div className="switch-pages">
          <NavSearch />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/top-rated">
              <Top />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route
              path="/search/:search"
              render={(props) => <Search {...props} />}
            />
            <Route
              path="/movie/:id"
              render={(props) => <MovieDetails {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
