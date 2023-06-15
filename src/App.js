// import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Courses from './components/Courses';
import Developer from './components/Developer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path="/course" element={<Card />} /> */}
          <Route path="developer" element={<Developer />} />
          <Route path='/footer' element={<Footer />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
