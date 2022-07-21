
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Dropdown from './Components/Dropdown';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <h1><Navbar /></h1> 
     <AllRoutes />
     {/* <Dropdown /> */}
    </div>
  );
}

export default App;
