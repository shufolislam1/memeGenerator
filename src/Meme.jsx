import React from 'react';

const Meme = ({ meme }) => {
    const { name, url } = meme;

    return (
        <div>
            <h1>Names: {name}</h1>
            <img height={400} src={url} alt="" />
        </div>
    );
};

export default Meme;
