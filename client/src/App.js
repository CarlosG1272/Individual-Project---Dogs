import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './components/landing_page';
import NavBar from './components/nav_bar';
import Home from './components/home';

// import { Detail}  from './components/Detail'; -- Si se importa asi por alguna razón no funciona el connect para las funciones XD. Si despues de hacer tu mapDispatchToprops dice que no es una funcion quitale las llaves

import Detail  from './components/Detail';
import Favorites from './components/Favorites';
import createDog from './components/CreateDog';
import MyDogs from './components/myDogs';

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
    </div>
  );
}

export default App;
