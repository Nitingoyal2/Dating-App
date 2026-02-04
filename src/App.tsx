import { useState } from 'react';
import Layout from '@components/Layout';
import AppRoutes from '@/routes';
import { Splash } from '@/pages';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <Layout>
        <Splash onFinish={handleSplashFinish} duration={2500} />
      </Layout>
    );
  }

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
