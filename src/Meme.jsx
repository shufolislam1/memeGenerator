import React from 'react';

const Meme = ({meme}) => {
    const {name,url} = meme;

    return (
        <div>
            {/* <button onClick={loadImg()}>Click Me</button> */}
            {/* <h1>Names: {name}</h1> */}
            <img  src={url} alt="" />
        </div>
    );
};

export default Meme;