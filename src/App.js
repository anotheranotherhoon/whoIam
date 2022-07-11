import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Components/Home'
import Profile from './Pages/Profile'
import Volunteer from './Pages/Volunteer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
      </Routes>
    </div>
  );
}

export default App;
