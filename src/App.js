import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom'
import Links from './Navigation/Links'
import Path from './Navigation/Path'
import Footer from './footer/Footer';


import './App.css';
function App() {
  return (
    <>
      
  
      <BrowserRouter>
       
        <Links/>
        <Path/>
      </BrowserRouter>
    
      <Footer/>


     
    </>
  );
}

export default App;
