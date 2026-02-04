import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import { ProstoLogo } from '@svg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <div className="home-content">
        <div className="home-icon">
          <ProstoLogo size={80} color="#6C5CE7" />
        </div>
        <h1 className="home-title">Prosto</h1>
        <p className="home-tagline">Love Made Simple</p>

        <div className="home-buttons">
          <button className="btn-primary" onClick={() => navigate(Routes.LOGIN)}>
            Sign In
          </button>
          <button className="btn-secondary" onClick={() => navigate(Routes.REGISTER)}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
