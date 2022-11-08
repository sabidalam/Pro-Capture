import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import LatestUpdate from './LatestUpdate/LatestUpdate';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <LatestUpdate></LatestUpdate>
        </div>

    );
};

export default Home;