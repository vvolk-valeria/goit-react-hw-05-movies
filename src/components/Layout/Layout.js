import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
    return (<>
        <AppBar />
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense>
        
    </>);
}
