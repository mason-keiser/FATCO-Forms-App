import React, { useEffect, useState } from 'react'
import './navCarousel.css'

const NavCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [questions, setQuestions] = useState([
        "Welcome", "Confirm Name", "Current Contact Information", "Marital Status", "Deeeeez"
    ]);

    const handleClick = (event) => {
        setActiveIndex(Number(event.id));
    };

    const goToNextProj = () =>{
        let index = activeIndex;
        console.log("index", index, "ql", questions.length)
        if (index < questions.length) {
            index++
            setActiveIndex(index);
        }
    }

    const goToPrevProj = () => {
        let index = activeIndex;
        if (index >= 1) {
            index--
            setActiveIndex(index);
        }
      }

        return (
            <div className="navCont">
                <div><span className="back" onClick={() => goToPrevProj()}> &#10094;</span></div>
                <div className='recsRow fade-in mt-4'>
                    {questions.map((question, index) => {
                        if (index < activeIndex + 4) {
                            return (
                                <div className='navItem' key={index} id={index} onClick={(e) => handleClick(e.target)}>
                                    {question}
                                </div>
                            )
                        }
                    })}
                </div>
                <div><span className="next" onClick={() => goToNextProj()}> &#10095;</span></div>
            </div>
        )
} 

export default NavCarousel;