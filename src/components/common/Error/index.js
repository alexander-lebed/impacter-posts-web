import React from 'react';

const Error = ({message, className}) => {
    return (
        <div id="error" className={className} style={{color: 'orangered'}}>
            {message}
        </div>
    );
};

export default Error;