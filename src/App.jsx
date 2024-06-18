import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Second from './Pages/Second';
import Good from './Pages/Good';
import GoodDua from './Pages/GoodDua';
import Love from './Pages/Love';
import NotGood from './Pages/NotGood';
import NotGooddua from './Pages/NotGooddua';
import NotGoodtiga from './Pages/NotGoodtiga';
import NotGoodEmpat from './Pages/NotGoodEmpat';
import NotGoodLima from './Pages/NotGoodLima';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Second" element={<Second/>}/>
        <Route path="/Good" element={<Good/>}/>
        <Route path="/Love" element={<Love/>}/>
        <Route path="/NotGood" element={<NotGood/>}/>
        <Route path="/NotGooddua" element={<NotGooddua/>}/>
        <Route path="/NotGoodtiga" element={<NotGoodtiga/>}/>
        <Route path="/NotGoodEmpat" element={<NotGoodEmpat/>}/>
        <Route path="/NotGoodLima" element={<NotGoodLima/>}/>
        <Route path="/GoodDua" element={<GoodDua/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
