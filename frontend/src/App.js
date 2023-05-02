import { createContext } from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { ChildA } from "./Pages/ChildA";
import { ChildB } from "./Pages/ChildB";
//import Maptest from './Maptest';
//import MyTestPrinting from './MyTestPrinting';
import './App.css';
import AppLogo from './Market.gif'
import Home from "./Pages/Home";
import Product from "./Pages/Product";

export const GLOBAL_data = createContext()

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App-header">
          <div>
            <Link to={`/`}>
              <img src={AppLogo} alt="" height={30} width={100} />
            </Link>

            My Super Market
          </div>
          <div>
            link1
            link2
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product/:slug' element={<Product />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
