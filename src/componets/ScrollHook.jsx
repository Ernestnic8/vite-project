import { useEffect, useState } from "react";

export default function ScrollHooks(){
    const[scroollY, setScrollY] =useState(0)
    useEffect(() => {

        const detectarScroll = () => setScrollY(window.pageYOffset)

        detectarScroll()
        window.addEventListener("scroll", detectarScroll);
    })
    return(
        <>
    <h2>Scrool Hook</h2>
    <p>Scroll Y del Navegdor {scroollY}px</p>
    </>
    );
}