import { Button } from '@material-ui/core';
import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { AdminLayout } from './components/Layout';
import { authActions } from './features/auth/authSlice';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        <Route path="" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
