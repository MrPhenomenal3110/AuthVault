import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import AuthProvider from '../context/AuthContext';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <div className='w-full h-screen'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path='/update-profile' element={<UpdateProfile/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
