import React from 'react'
import BannerSection from '../../BannerSection';
import {homeObjOne} from './Data';

function Home() {
    return (
        <>
            <BannerSection {...homeObjOne} />
        </>
    )
}

export default Home;
