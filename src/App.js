import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import { BrowserRouter } from "react-router-dom";
import Links from "../src/Component/Navigation/Links";
import Path from "../src/Component/Navigation/Path";
import Footer from "../src/Component/footer/Footer";
import "./App.css";



function App() {
 
  return (
  <>
      <div className="background">
        <BrowserRouter>
          <Links />
          <Path />
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;
