import React, { Component, useContext, useEffect, useState } from 'react';

import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import { BCContext } from '../../context/broadcast-channel';
import { SHOP_DATA } from './shop.data';

const ShopPage = () => {
    const bcContext = useContext(BCContext);
    const [collections, setCollections] = useState(SHOP_DATA)
    const bc2 = new BroadcastChannel("test2");

    useEffect(() => {
        const bc = bcContext.bc;
        bc.onmessage = function (e) {
            console.log('Magic Received', e.data);
        };
        bc2.onmessage = function (e) {
            console.log('Magic 2 Received', e.data);
        };
    }
        , [])

    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...collectionProps }) => {
                    return <PreviewCollection key={id} {...collectionProps} />
                }
                )
            }
        </div>
    );
}

export default ShopPage;