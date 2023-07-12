import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Help from './pages/Help';
import Terms from './pages/Terms';
import NavigationBar from './Components/NavigationBar';
import FooterSection from './Components/FooterSection';
import Page404 from './pages/Page404';
import ReviewForm from './pages/ReviewForm';
import GameDetails from './Components/GameDetails';
import GameList from './pages/GameList';

export default function App() {
  return (
    <>
 <NavigationBar/>
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookiesPolicy" element={<CookiesPolicy />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/gameList" element={<GameList />} />
                </Routes>
<FooterSection/>
    </>
  )
}