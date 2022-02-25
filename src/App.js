import React from "react";
import {Route, Switch, Link} from 'react-router-dom'





const App = () => {
  
  return (
    <div className="App">
      <header>Lambda Eats
      <Link to='/'>Home</Link>

        <Link to='/pizza'>Help</Link>
      </header>
      <Switch>
        <Route exact path='/'>
        <h1>Your favorite food delivered while coding</h1>
        <Link id="order-pizza" to='/pizza'>Order Now</Link>
        </Route>
        <Route path='/pizza'>
          <h2>LOLOLOLOL</h2>
          
        </Route>

      </Switch>
     
    </div>
  );
};
export default App;
