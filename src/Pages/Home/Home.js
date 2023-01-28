import React from 'react';
import useTitle from '../../component/Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import LatestUpdate from './LatestUpdate/LatestUpdate';
import Services from './Services/Services';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <LatestUpdate></LatestUpdate>
            <Contact></Contact>
        </div>

    );
};

export default Home;