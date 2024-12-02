import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';
import homeblur from './assets/images/homeblur.jpg';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Footer from './components/HeaderFooter/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className="relative w-full min-h-screen overflow-hidden">
      <img src={homeblur} className="fixed inset-0 w-full h-full object-cover blur-sm" alt="Background" />
      <div className="relative z-10">
        <App />
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false}/>
        <Footer/>
      </div>
    </div>
  </React.StrictMode>
);


