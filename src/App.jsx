import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Commonroutes from "./Routes/commonroutes";

function App() {
  return (
    <BrowserRouter>
      <Commonroutes />
    </BrowserRouter>
  );
}

export default App;
