import {render, screen} from '@testing-library/react';
import LoginPage from '../pages/login.page';

test('LoginPage should be render correctly...', ()=>{
    render(<LoginPage />);
});
