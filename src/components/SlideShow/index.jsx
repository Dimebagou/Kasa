import { useState, useEffect } from 'react';
import './index.css';

const SlideShow = (props) => {
    const { pictures } = props
    const [index, setIndex] = useState(0)
    const delay = 5000;

    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % pictures?.length);
        }, delay);
    
        return () => {
            clearTimeout(timeout);
        };
    }, [index, pictures?.length]);
    



    return (
        <div className="slideshow">
            <img onClick={() => { index > 0 ? setIndex((prevIndex) => prevIndex - 1) : setIndex(pictures.length - 1) }} src="/img/arrowLeft.svg" alt="left arrow" className='left arrow' />
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {pictures && pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ backgroundImage: `url(${picture})` }}>
                    </div>
                ))}

            </div>
            <img onClick={() => { index < pictures.length - 1 ? setIndex((prevIndex) => prevIndex + 1) : setIndex(0) }} src="/img/arrowRight.svg" alt="right arrow" className='right arrow' />
        </div>

    );
}

export default SlideShow