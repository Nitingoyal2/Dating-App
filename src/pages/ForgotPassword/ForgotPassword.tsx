import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';
import AuthLayout from '@components/AuthLayout';
import { MailIcon } from '@svg';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(Routes.LOGIN);
  };

  return (
    <AuthLayout
      title="Account Recovery"
      description="we'll email you a link that will instantly log you in"
      onBackClick={handleBack}
    >
      <div className="form-group">
        <label className="form-label">Your Email</label>
        <div className="form-input-wrapper">
          <span className="form-input-icon">
            <MailIcon size={20} color="#999" />
          </span>
          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
          />
        </div>
      </div>

      <span className="form-link forgot-password-resend">Resend email</span>

      <button className="submit-btn" style={{ marginTop: '32px' }}>
        Send Email
      </button>
    </AuthLayout>
  );
};

export default ForgotPassword;

