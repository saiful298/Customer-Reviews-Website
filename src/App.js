import './App.css';
import Home from './components/Home/Home';

import Reviews from './components/Reviews/Reviews'
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>} > </Route>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} > </Route>
      </Routes>

    </section>

  );
}

export default App;
