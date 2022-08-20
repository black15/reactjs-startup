import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddCharacter from './pages/AddCharacter';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddCharacter />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
