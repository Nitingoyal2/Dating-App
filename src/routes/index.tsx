import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { allRoutes } from './routes';

// Re-export Routes enum
export { Routes } from '@/types';
export { default as ProtectedRoute } from './ProtectedRoute';
export { default as PublicRoute } from './PublicRoute';

const AppRoutes = () => {
    return (
        <RouterRoutes>
            {allRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </RouterRoutes>
    );
};

export default AppRoutes;
