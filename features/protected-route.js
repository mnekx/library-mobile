import { useAuthState } from '../contexts/auth/aut-context';
import { Navigate, useLocation } from 'react-router-native';

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuthState();
  const location = useLocation()

  if (token?.length === 0) {
    return <Navigate to='/login' replace state={{from: location}}/>;
  }
  return children;
};
