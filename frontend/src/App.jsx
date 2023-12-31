import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import MainPage from './MainPage';
import Manage from './Manage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/manage" element={<Manage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
