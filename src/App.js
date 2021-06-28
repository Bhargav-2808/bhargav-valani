import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import Links from './Navigation/Links'
import Path from './Navigation/Path'


function App() {
  return (
    <>
      <BrowserRouter>
        <Links/>
        <Path/>
      
      </BrowserRouter>

     
    </>
  );
}

export default App;
