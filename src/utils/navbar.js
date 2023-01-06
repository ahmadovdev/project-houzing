import useId from '../hooks/useId';
import HomePage from '../pages/Home';
import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
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