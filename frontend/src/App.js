import './App.css';
import Login from './pages/LoginPage/loginPage';
import SignUp from './pages/SignUpPage/signupPage';
import HomePage from './pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext';
function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <HomePage /> */}
      <Toaster />
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signUp' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
