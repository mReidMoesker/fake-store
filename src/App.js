import './css/index.css';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
