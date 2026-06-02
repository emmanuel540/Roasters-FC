import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
