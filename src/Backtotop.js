import React from "react"
import {useEffect, useState} from "react";



function Backtotop(){
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() =>  {
           window.addEventListener('scroll', () => {
               if(window.scrollY > 100) {
                   setBackToTopButton(true)
               } else {
                   setBackToTopButton(false)
               }
           }) 
    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 30,
            behavior: "smooth"
        })
    }


    return <div className="scroll">

    {backToTopButton && (
        <button style={{
            position:"fixed",
            bottom: '40px',
            right: '40px',
            height: '40px',
            width: '40px',
            fontSize: '40px',
            opacity : 0.70
        }} onClick={scrollUp}>^</button>
    )}
    </div>
}

export default Backtotop
