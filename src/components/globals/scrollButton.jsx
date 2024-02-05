import React, { useEffect, useState } from 'react'
import './scrollButton.css'

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const top = window.scrollY;
            setIsVisible(top > 100);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <span className='fa fa-arrow-up'></span>
        </button>
    )
}

export default ScrollButton