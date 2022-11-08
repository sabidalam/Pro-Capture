import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import LatestUpdate from './LatestUpdate/LatestUpdate';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LatestUpdate></LatestUpdate>
        </div>

    );
};

export default Home;