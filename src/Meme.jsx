import React from 'react';

const Meme = ({meme}) => {
    const {name,url} = meme;
    return (
        <div>
            {/* <h1>Names: {name}</h1> */}
            <img  src={url} alt="" />
            <button></button>
        </div>
    );
};

export default Meme;