import React from 'react';
import useId from '../hooks/useId';

const Properties = React.lazy(() => import('../pages/Properties'))
const HomePage= React.lazy(() => import('../pages/Home'))

// import HomePage from '../pages/Home';
// import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sign in</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },
];