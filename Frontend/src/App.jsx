
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'; 
import Register from './pages/Register';
import Login from './pages/Login'; 
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Nav from '../src/components/Nav';
import Profile from './pages/Profile';
import Pizza from './pages/Pizza';
import Notfound from './pages/Notfound';
import CartProvider from './contexts/CartContext.jsx';
import DataPizzaProvider from './contexts/DataPizzaContext.jsx';
import UserProvider, { UserContext } from './contexts/UserContext.jsx';
import { useContext } from 'react';




const App = () => {
    const ProtectedRoute = () => {
        const { user } = useContext(UserContext);
        return user.token ? <Profile /> : <Navigate to="/login" />;
    }

    return (
        <UserProvider>
            <DataPizzaProvider>
                <CartProvider>
                    <Router>
                        <Nav />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<ProtectedRoute />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/pizza/:id" element={<Pizza />} />
                            <Route path="/notfound" element={<Notfound />} />
                        </Routes>
                        <Footer /> 
                    </Router>
                </CartProvider> 
            </DataPizzaProvider>    
        </UserProvider>
    );
};

export default App;