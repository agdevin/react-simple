import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.page';
import MenuPage from './pages/menu.page';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;
