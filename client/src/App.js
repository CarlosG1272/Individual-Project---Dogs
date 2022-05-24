import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './components/1.landing_page/index';

import Home from './components/2.home';

import Detail  from './components/6.Detail';
import Favorites from './components/8.Favorites';
import createDog from './components/7.CreateDog';
import MyDogs from './components/5.myDogs';



function App() {
  return (
    <div id="main">
      <Route exact path={"/"}><LandingPage /></Route>
      <Route path={"/home"} exact component={Home} />
      <Route exact strict path={"/dog/:id"} component={Detail}/>
      <Route exact path={"/dogs/favorites"} component={Favorites}/>
      <Route exact path={"/dogs/create"} component={createDog} />
      <Route exact path={"/dogs/mydogs"} component={MyDogs} /> 
    </div>
  );
}

export default App;
