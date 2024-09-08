import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import Router here
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProductDetails from './components/ProductDetails';
import Overview from './components/Overview';
import NewArrivals from './components/NewArrivals';
import AllDishes from './components/AllDishes';
import Contacts from './components/ContactForm';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Menu from './components/menu';
import Confirmation from './components/OrderConfirmation';
import ReservationPage from './components/Reservation'; // Import ReservationPage
import { CartProvider } from './context/CartContext'; // Import the CartProvider
import { UserProvider } from './context/UserContext'; // Import the UserProvider
import Checkout from './components/Checkout'; // Import the Checkout component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteWrapper from './components/RouteWrapper'; // Import the RouteWrapper

function App() {
  return (
    <>
      {/* Include ToastContainer at the root level */}
      <UserProvider>
        <CartProvider>
          <RouteWrapper>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/reservation" element={<ReservationPage />} /> {/* Add route for reservation */}
              <Route path="/checkout" element={<Checkout />} /> {/* Add the checkout route */}
              <Route path="/Confirmation" element={<Confirmation />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </RouteWrapper>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
