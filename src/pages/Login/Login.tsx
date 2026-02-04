import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import AuthLayout from '@components/AuthLayout';
import { MailIcon, LockIcon } from '@svg';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the page user was trying to visit
  const from = location.state?.from?.pathname || Routes.DASHBOARD;

  const handleBack = () => {
    navigate(Routes.HOME);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - replace with actual API call
    if (email && password) {
      dispatch(loginSuccess({
        user: {
          id: '1',
          name: email.split('@')[0],
          email: email,
        },
        token: 'demo-token-123',
      }));
      
      // Navigate to the page they were trying to access, or dashboard
      navigate(from, { replace: true });
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue finding your perfect match"
      onBackClick={handleBack}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <div className="form-input-wrapper">
            <span className="form-input-icon">
              <MailIcon size={20} color="#999" />
            </span>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="form-input-wrapper">
            <span className="form-input-icon">
              <LockIcon size={20} color="#999" />
            </span>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <span className="form-link" onClick={() => navigate(Routes.FORGOT_PASSWORD)}>
          Forgot password?
        </span>

        <button type="submit" className="submit-btn" style={{ marginTop: '32px' }}>
          Sign In
        </button>
      </form>

      <p className="login-footer">
        Don't have an account?{' '}
        <span className="form-link" onClick={() => navigate(Routes.REGISTER)}>
          Sign Up
        </span>
      </p>
    </AuthLayout>
  );
};

export default Login;

