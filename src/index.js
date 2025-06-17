import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/header.css';
import './css/footer.css';
import './css/notfound.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);