import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '@/store';
import AntdProvider from '@components/AntdProvider';
import { Spinner } from '@components/Spinner';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner size="large" fullScreen />} persistor={persistor}>
        <AntdProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AntdProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
