import type { LayoutProps } from '@/types';
import './Layout.css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      {/* Left side - Mobile App Container */}
      <div className="app-container">
        <div className="phone-frame">
          {/* App content area */}
          <div className="app-content">
            {children}
          </div>
        </div>
      </div>

      {/* Right side - Decorative Panel */}
      <div className="side-panel">
        <div className="side-content">
          <div className="brand-section">
            <h1 className="brand-title">Prosto</h1>
            <p className="brand-tagline">Love Made Simple</p>
          </div>
          
          <div className="decorative-hearts">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="floating-heart" style={{ animationDelay: `${i * 0.7}s` }}>
                💜
              </div>
            ))}
          </div>

          <div className="stats-section">
            <div className="stat">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Matches Made</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Success Stories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
