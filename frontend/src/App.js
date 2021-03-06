import React from 'react';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
function App() {
  return (

    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
       <Routes>
          <Route path ="/" element ={<Homescreen/>} exact></Route>
          <Route path ="/product/:id" element ={<Productscreen/>}></Route>
       </Routes>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
