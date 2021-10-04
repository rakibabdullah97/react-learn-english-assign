import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import NFP from './Component/NotFound/NFP';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Blog from './Component/Blog/Blog';
import AboutUs from './Component/AboutUs.js/AboutUs';
import { createContext } from 'react';
export const showContext = createContext()

function App() {
  const context = <h1 className='m-3'>Our <span className='service-title'>Our ALL Services</span> Are Shown Here<span className='service-title'> Join now</span></h1>
  return (
    <showContext.Provider value={context}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='*'>
              <NFP></NFP>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </showContext.Provider>
  );
}

export default App;
