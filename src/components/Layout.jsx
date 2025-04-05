import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
