import './HomePage.scss';

import React, { Component, useContext, useEffect } from 'react';

import MenuDirectory from '../../components/MenuDirectory/MenuDirectory';
import { BCContext } from '../../context/broadcast-channel';

const HomePage = () => {
    const bc2 = new BroadcastChannel("test2");
    const bcContext = useContext(BCContext);

    const postMagic = () => {
        console.log("Active magic")
        bcContext.bc.postMessage("My test message");
        bc2.postMessage("Magic 2");
    }

    return (
        <div className='homepage'>
            <button onClick={postMagic}>Click me to see the magic</button>
            <MenuDirectory />
        </div>
    );
}

export default HomePage;