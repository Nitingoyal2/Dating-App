import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import AuthLayout from '@components/AuthLayout';
import { UserIcon, MailIcon, LockIcon } from '@svg';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(Routes.LOGIN);
  };

  return (
    <AuthLayout
      title="Create Account"
      description="Join millions finding love every day"
      onBackClick={handleBack}
    >
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <div className="form-input-wrapper">
          <span className="form-input-icon">
            <UserIcon size={20} color="#999" />
          </span>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
      </div>

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
            placeholder="Create a password"
          />
        </div>
      </div>

      <button className="submit-btn" style={{ marginTop: '24px' }}>
        Create Account
      </button>

      <p className="register-footer">
        Already have an account?{' '}
        <span className="form-link" onClick={() => navigate(Routes.LOGIN)}>
          Sign In
        </span>
      </p>
    </AuthLayout>
  );
};

export default Register;

