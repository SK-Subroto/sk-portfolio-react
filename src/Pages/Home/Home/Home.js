import React from 'react';
import About from '../About/About';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
        </div>
    );
};

export default Home;