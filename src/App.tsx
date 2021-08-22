import { Route, Switch } from "react-router-dom";
import Items from "./Components/Items";
import MovieDetails from "./Components/MovieDetails";
import Navbar from "./Components/Navbar";
import Persons from "./Components/Persons";

function App() {
  return (
    <div className="font-myriad">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/persons">
          <Persons />
        </Route>
        <Route path="/movie:id?">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
