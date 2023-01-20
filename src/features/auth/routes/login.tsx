import { Navigate, useNavigate } from 'react-router-dom';

import { Layout, LoginForm, useAuth } from '@/features/auth';

export const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <Layout title="Log in to your account">
      <LoginForm onSuccess={handleNavigate} />
    </Layout>
  );
};
