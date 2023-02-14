import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.page';
import MenuPage from './pages/menu.page';
import TestPage from './pages/test.page';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<MenuPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
