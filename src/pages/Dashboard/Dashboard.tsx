import { useAppSelector, useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
import { HeartIcon, UserIcon, MessageIcon, SettingsIcon } from '@svg';
import { ThemeToggle } from '@components/ThemeToggle';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="dashboard-screen">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name || 'User'}!</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Theme Toggle Section */}
      <div className="dashboard-section">
        <h3 className="section-title">Appearance</h3>
        <ThemeToggle variant="icons" />
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <HeartIcon size={32} color="var(--color-accent-tertiary)" />
          <span>Discover</span>
        </div>
        <div className="dashboard-card">
          <MessageIcon size={32} color="var(--color-accent-tertiary)" />
          <span>Messages</span>
        </div>
        <div className="dashboard-card">
          <UserIcon size={32} color="var(--color-accent-tertiary)" />
          <span>Profile</span>
        </div>
        <div className="dashboard-card">
          <SettingsIcon size={32} color="var(--color-accent-tertiary)" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

