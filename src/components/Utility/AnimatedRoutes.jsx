import React from 'react';
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import {Route, Routes, useLocation} from 'react-router-dom';


import Landing from '../Landing/Landing';
import Navbar from '../Navbar/Navbar';
import PreDashboard from '../PreDashboard/PreDashboard';
import Question from '../Question/Question';
import Study from '../Study/Study';
import Over from '../Over/Over'
import Support from '../Support/Support';
import Terms from '../Terms/Terms';
import QuestionAsked from '../Question/QuestionAsked/QuestionAsked';
import QuestionDescription from '../Question/QuestionDescription/QuestionDescription';
import Profile from '../ProfileView/Profile';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            {(['/', '/predashboard'].includes(location.pathname)) ? <></> : <Navbar title={location.pathname.slice(1)}/>}
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/predashboard' element={<PreDashboard/>}></Route>
                <Route path='/question' element={<Question/>}></Route>
                <Route path='/study' element={<Study />}></Route>
                <Route path='/over' element={<Over />}></Route>
                <Route path='/support' element={<Support />}></Route>
                <Route path='/terms' element={<Terms />}></Route>
                <Route path='/question-asked' element={<QuestionAsked />}></Route>
                <Route path='/question-description' element={<QuestionDescription />}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes