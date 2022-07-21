import * as React from 'react';
import { Navigate, RouteProps, Route } from 'react-router-dom';


export function PrivateRoute(props: RouteProps) {
  //Check if user is logged in
  //If yes, show route
  //Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Navigate to="/login" />;
  return <Route {...props}/>;
}
