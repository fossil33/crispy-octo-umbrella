import logo from './logo.svg';
import './App.css';
import MobileFriendlyPage from './components/bso1';
import { Announcement } from '@mui/icons-material';
import AnotherComponent from './components/bso2';
import ElevateAppBar from './components/Appbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MobileFriendlyPage />
    <AnotherComponent />
    <ElevateAppBar />
    <Footer />
    </>
  );
}

export default App;
