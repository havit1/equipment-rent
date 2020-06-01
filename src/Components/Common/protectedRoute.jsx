import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.uid)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
