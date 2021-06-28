import {Route , Switch} from 'react-router-dom'
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Error from '../Error';

export default function Path()
{
    return(
    <>
        <Switch>
        <Route path="/" exact={true}><Home/></Route>
        <Route path="/About"><About/></Route>
        <Route path="/Projects"><Projects/></Route>
        <Route path="/Contact"><Contact/></Route>
        <Route path="*"><Error/></Route>
        </Switch>
    </>
    );

}