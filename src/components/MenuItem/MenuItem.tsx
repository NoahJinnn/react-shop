import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import './MenuItem.scss'

interface IMenuItemProps extends RouteComponentProps {
    title: string
    imageUrl: string
    size: string
    linkUrl: string
}

function MenuItem({title, imageUrl, size, linkUrl, history, match}: IMenuItemProps) {
        return (
            <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
}

export default withRouter(MenuItem as any);