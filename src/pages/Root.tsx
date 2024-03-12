import React from "react";
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <main id="maincontent" className="myaccount-landing myaccount-my-services">
            <Outlet/>
        </main>
        
    )
}

export default Root;