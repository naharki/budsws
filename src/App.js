// import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Courses from './components/Courses';
import Developer from './components/Developer';
import Home from './components/Home';
=======
import Members from './components/Our-members';
>>>>>>> 8c2637b1860ac8d2527a38b33c52f1e2d6d8bb6f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path="/course" element={<Card />} /> */}
          <Route path="developer" element={<Developer />} />
          <Route path='/footer' element={<Footer />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
     
=======
      <Members />
      <Card />
>>>>>>> 8c2637b1860ac8d2527a38b33c52f1e2d6d8bb6f
    </div>
  );
}

export default App;
 