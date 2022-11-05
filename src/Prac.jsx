import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meme from './Meme';

const Prac = () => {
    const [memes, setMemes] = useState([]);

    axios.get('https://api.imgflip.com/get_memes')
        .then(data => setMemes(data.data.data.memes))
    return (
        <div>

            {
                memes?.map(meme => <Meme key={meme.id}
                    meme={meme}
                >

                </Meme>)
            }
        </div>
    );
};

export default Prac;