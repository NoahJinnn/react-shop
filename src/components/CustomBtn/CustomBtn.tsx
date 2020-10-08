import React from 'react';
import  './CustomBtn.scss'

function CustomBtn({children, ...btnProps}){
        return (
            <button className="custom-button" {...btnProps}>{children}</button>
        );
}

export default CustomBtn;