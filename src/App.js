import Recipe from "./Recipe";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Categoryreceipe from "./CategoryReceipe/Categoryreceipe";
import IngredientsData from "./CategoryReceipe/IngredientsData";
import { createContext, useState } from "react";

export let receipeContext = createContext({})

function App() {
   
  const [selectedCategory , setSelectedCategory] = useState([])

  return (
    
    <div className="App">
     <receipeContext.Provider value = {{selectedCategory , setSelectedCategory}}>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={ <Recipe />}></Route>
         <Route path="/categoryReceipe" element={<Categoryreceipe />}></Route>
         <Route path="/ingredientsData" element={ <IngredientsData />}></Route>
      </Routes>
      </BrowserRouter>
     </receipeContext.Provider >
    </div>
  );
}

export default App;
