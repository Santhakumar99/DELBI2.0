import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HealthDashboard from './components/HealthDashboard';
import UsersList from './components/Users/UsersList';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Menubar/>}
                    />
                    <Route
                        exact
                        path="/ViewUsers"
                        element={<UsersList />}
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
