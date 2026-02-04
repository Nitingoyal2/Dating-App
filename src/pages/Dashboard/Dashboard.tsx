import { useAppSelector, useAppDispatch } from '@store/hooks';
import { logout } from '@store/slices';
import { HeartIcon, UserIcon, MessageIcon, SettingsIcon } from '@svg';
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

      <div className="dashboard-content">
        <div className="dashboard-card">
          <HeartIcon size={32} color="#ff6b6b" />
          <span>Discover</span>
        </div>
        <div className="dashboard-card">
          <MessageIcon size={32} color="#ff6b6b" />
          <span>Messages</span>
        </div>
        <div className="dashboard-card">
          <UserIcon size={32} color="#ff6b6b" />
          <span>Profile</span>
        </div>
        <div className="dashboard-card">
          <SettingsIcon size={32} color="#ff6b6b" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

