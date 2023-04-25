import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route, 
  Link
} from "react-router-dom";
import {
  Navbar
} from './components'
import {
  Home,
  Meals,
  Options,
  Formulas
} from './views';

function App() {

  return (
    <>
      <Navbar>
        <p>children</p>
      </Navbar>
    </>
  );
}

export default App;
