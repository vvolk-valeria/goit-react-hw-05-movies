import { Box } from './Box';
import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (<Box>
        <AppBar />
        <Outlet />
    </Box>);
}
