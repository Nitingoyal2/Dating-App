import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import { PrimaryButton } from '@components/Button';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-screen">
      {/* Background Hearts */}
      <div className="onboarding-hearts">
        <span className="heart heart-1">💗</span>
        <span className="heart heart-2">💕</span>
        <span className="heart heart-3">🩷</span>
        <span className="heart heart-4">💗</span>
      </div>

      {/* Illustration */}
      <div className="onboarding-illustration">
        <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="150" cy="140" r="100" fill="#FFE4E1" opacity="0.5" />
          
          {/* Man figure */}
          <g className="person-man">
            <circle cx="120" cy="90" r="25" fill="#FFDAB9" />
            <path d="M100 75 Q120 60 140 75 Q140 85 135 90 Q120 80 105 90 Q100 85 100 75Z" fill="#4A3728" />
            <path d="M95 115 Q120 110 145 115 L150 200 Q120 205 90 200 Z" fill="#F5F5F5" />
            <path d="M145 130 Q165 140 175 145" stroke="#FFDAB9" strokeWidth="12" strokeLinecap="round" />
            <path d="M95 195 L90 260 Q105 265 120 260 L120 200" fill="#2C3E50" />
            <path d="M145 195 L150 260 Q135 265 120 260 L120 200" fill="#2C3E50" />
          </g>
          
          {/* Woman figure */}
          <g className="person-woman">
            <circle cx="180" cy="95" r="23" fill="#FFDAB9" />
            <path d="M157 80 Q180 55 203 80 Q210 100 205 120 Q180 115 155 120 Q150 100 157 80Z" fill="#1a1a2e" />
            <path d="M160 118 Q180 115 200 118 L210 200 Q180 210 150 200 Z" fill="#FF6B6B" />
            <path d="M160 135 Q140 145 130 148" stroke="#FFDAB9" strokeWidth="10" strokeLinecap="round" />
            <path d="M165 195 L160 255" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round" />
            <path d="M195 195 L200 255" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round" />
          </g>
          
          {/* Hands meeting */}
          <circle cx="152" cy="147" r="8" fill="#FFDAB9" />
          <circle cx="148" cy="145" r="6" fill="#FFDAB9" />
        </svg>
      </div>

      {/* Content */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">Algorithm</h1>
        <p className="onboarding-description">
          Users going through a vetting process to ensure you never match with bots.
        </p>
      </div>

      {/* Button */}
      <div className="onboarding-actions">
        <PrimaryButton onClick={() => navigate(Routes.LOGIN)}>
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Home;
