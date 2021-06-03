import './App.css';
import {Switch, Route} from 'react-router-dom'
import Restaurants from './Restaurants.js'
import NewRestaurantForm from './NewRestaurantForm.js'
import Home from './Home.js'
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route path="/restaurants/new">
            <NewRestaurantForm/>
          </Route>
          <Route path="/restaurants">
            <Restaurants/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
