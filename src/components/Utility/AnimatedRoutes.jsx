import React from 'react';
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import {Route, Routes, useLocation} from 'react-router-dom';

import Landing from '../Landing/Landing';
import PreDashboard from '../PreDashboard/PreDashboard';
// import About from '../About/About';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* <Route path='/' element={<Landing />}></Route> */}
                <Route path='/' element={<PreDashboard/>}></Route>
                
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes