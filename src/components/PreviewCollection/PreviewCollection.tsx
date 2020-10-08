import React from 'react';
import CollectionItem from "../CollectionItem/CollectionItem";
import "./PreviewCollection.scss"

interface IPreviewCollectionProps {
    title: string
    routeName: string
    items: Array<{id: number, name: string, price: number, imageUrl: string}>
}

function PreviewCollection({title, routeName, items}: IPreviewCollectionProps) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item,idx) => idx <= 3)
                    .map(({id, ...collectionItemProps}) => {
                    return <CollectionItem key={id} {...collectionItemProps}/>
                })}
            </div>
        </div>
    );
}

export default PreviewCollection;