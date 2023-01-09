// import { createContext } from 'react';
import PropertiesProvider from './properties';

// const Root = createContext();

const RootContext = ({ children }) => {
     return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};

export default RootContext;