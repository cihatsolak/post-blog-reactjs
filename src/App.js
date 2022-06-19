import logo from './logo.svg';
import './App.css';
import Router from './router/Router';
import { useEffect } from 'react';
import { request } from './request/Request';

function App() {

  useEffect(() => {
    request.get('/test')
  }, [])

  return (
    <>
      <Router />
    </>
  );
}

export default App;
