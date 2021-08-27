import { Route, Switch } from "react-router-dom";
import Items from "./Components/Items";
import MovieDetails from "./Components/MovieDetails";
import Navbar from "./Components/Navbar";
import PersonDetails from "./Components/PersonDetails";
import Persons from "./Components/Persons";
import TvSerieDetails from "./Components/TvSerieDetails";
import TvSeries from "./Components/TvSeries";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/persons">
          <Persons />
        </Route>
        <Route path="/tvseries">
          <TvSeries />
        </Route>
        <Route path="/movie:id?">
          <MovieDetails />
        </Route>
        <Route path="/person:id?">
          <PersonDetails />
        </Route>
        <Route path="/tvserie:id?">
          <TvSerieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
