import { createContext } from "react"

import { ChildA } from "./Pages/ChildA";
import { ChildB } from "./Pages/ChildB";
//import Maptest from './Maptest';
//import MyTestPrinting from './MyTestPrinting';
import './App.css';
import AppLogo from './Market.gif'
import Products from "./Pages/Products";

export const GLOBAL_data = createContext()

function App() {
  return (
    <>
        <div className="App-header">
          <div>
                      <img src={AppLogo} alt="" height={30} width={100} />
          Market
          </div>
          <div>
            link1 
            link2
          </div>
        </div>

        <div className="main">
          <Products />

        </div>
    </>
  );
}

export default App;
