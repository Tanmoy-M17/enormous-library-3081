import './App.css';
import AllRoutes from './Components/AllRoutes';
import {MainRoutes} from "./Components/MainRoutes";
function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <AllRoutes />
    </div>
  );
}

export default App;
