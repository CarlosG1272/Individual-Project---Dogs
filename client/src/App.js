import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './components/1.landing_page/index';
import NavBar from './components/4.nav_bar';
import Home from './components/2.home';

// import { Detail}  from './components/Detail'; -- Si se importa asi por alguna razón no funciona el connect para las funciones XD. Si despues de hacer tu mapDispatchToprops dice que no es una funcion quitale las llaves

import Detail  from './components/6.Detail';
import Favorites from './components/8.Favorites';
import createDog from './components/7.CreateDog';
import MyDogs from './components/5.myDogs';

// Para el rico test de las routes
import { useLocation} from 'react-router-dom'
export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}


function App() {
  return (
    <div id="main">
      <Route exact path={"/"}><LandingPage /></Route>

      <Route path={"/home"} component={NavBar} />
      <Route path={"/home"} exact component={Home} />
      {/* // Averiguar bien esto de exact y strict, porque esta porqueria esta que se renderiza sola. Deatil XD */}
      <Route exact strict path={"/dog/:id"} component={Detail}/>
      <Route exact path={"/dogs/favorites"} component={Favorites}/>
      <Route exact path={"/dogs/create"} component={createDog} />
      <Route exact path={"/dogs/mydogs"} component={MyDogs} /> 

      {/* // Para el rico test de routes XD */}
      {/* <LocationDisplay /> */}
    </div>
  );
}

export default App;
