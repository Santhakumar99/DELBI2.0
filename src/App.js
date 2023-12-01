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
import Adduser from './components/Users/AddUser';
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
                               <Route
                        exact
                        path="/Adduser"
                        element={<Adduser />}
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
