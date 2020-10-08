import React, {Component} from 'react';
import {SHOP_DATA} from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...collectionProps}) => {
                            return <PreviewCollection key={id} {...collectionProps}/>
                        }
                    )
                }
            </div>
        );
    }
}

export default ShopPage;