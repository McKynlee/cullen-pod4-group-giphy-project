import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <Route exact path='/' >
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
