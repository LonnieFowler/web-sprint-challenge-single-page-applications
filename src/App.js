import React from "react";
import {Route, Switch, Link} from 'react-router-dom'
import OrderForm from "./Components/Pizza";


const App = () => {
  
  return (
    <div className="App">
      <header>Lambda Eats
      <button><Link to='/'>Home</Link></button>

      <button><Link to=''>Help</Link></button>
      </header>
      <Switch>
        <Route exact path='/'>
        <h1>Your favorite food delivered while coding</h1>
        <button><Link id="order-pizza" to='/pizza'>Order Now</Link></button>
        </Route>
        <Route path='/pizza/'>
          <OrderForm />
          
        </Route>

      </Switch>
     
    </div>
  );
};
export default App;
