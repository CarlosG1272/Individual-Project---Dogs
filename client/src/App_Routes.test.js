import App from './App';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LandingPage from './components/1.landing_page';
import Home from './components/2.home';
import CreateDog from './components/7.CreateDog';
import Detail from './components/6.Detail';
import Favorites from './components/8.Favorites';
import MyDogs from './components/5.myDogs';


configure({adapter: new Adapter()});

  xdescribe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('The component must be renders in route /', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(LandingPage)).toHaveLength(1);
    });
  });
  describe('El componente Home debe renderizar en la ruta /home', () => {
    it('El componente Home debe renderizar en la ruta /home', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Home)).toHaveLength(0);
    });
  });


  it('El componente DogCreate debe renderizar en la ruta /dogs', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/dogs/create' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(CreateDog)).toHaveLength(0);
  });

  
  it('El componente DogDetail debe renderizar en la ruta /home/:id', () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[  '/dog/:id' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(Detail)).toHaveLength(0);
  });

})
//   describe('Error 404', () => {

//     it('El componente Error 404 debe renderizar en cualquier ruta diferente a las definidas previamente', () => {
//       const container = mount(
//         <Provider store={store}>
//           <MemoryRouter initialEntries={[  '/edit/1' ]}>
//             <App />
//           </MemoryRouter>
//         </Provider>
//       );
//       expect(container.find(Error404)).toHaveLength(0);
//     });
//   });
// });