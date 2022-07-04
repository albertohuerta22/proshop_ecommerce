import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Containter from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Containter>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Containter>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
