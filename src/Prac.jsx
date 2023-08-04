import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meme from './Meme';

const Prac = () => {
    const [memes, setMemes] = useState([]);
    const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(data => setMemes(data.data.data.memes))
            .catch(error => console.error('Error fetching memes:', error));
    }, []);

    const handleNextMeme = () => {
        setCurrentMemeIndex(prevIndex => (prevIndex + 1) % memes.length);
    };

    return (
        <div>
            {memes.length > 0 ? (
                <Meme meme={memes[currentMemeIndex]} />
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleNextMeme}>Next Meme</button>
        </div>
    );
};

export default Prac;
