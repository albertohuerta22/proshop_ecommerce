import React from 'react';
import Containter from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Containter>
          <h1>Welcome To ProShop</h1>
        </Containter>
      </main>
      <Footer />
    </>
  );
}

export default App;
