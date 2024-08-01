import { useState, useRef, useEffect } from "react";
import styles from './Main.module.css'

const Main = () => {
    const sentence1Text = useRef(null)
    const sentence1Img = useRef(null)
    const sentence2Text1 = useRef(null)
    const sentence2Text2 = useRef(null)
    const sentence2Text3 = useRef(null)
    const sentence2Text4 = useRef(null)
    const sentence3Text = useRef(null)
    const sentence4Text1 = useRef(null)
    const sentence4Img = useRef(null)
    const sentence4Text2 = useRef(null)
    const sentence4Text3 = useRef(null)
    const sentence4Text4 = useRef(null)
    const sentence4Text5 = useRef(null)

    useEffect(() => {
        setTimeout(function(){
            sentence1Text.current.style.setProperty('bottom', 0)
            sentence1Img.current.style.setProperty('bottom', 0)

        }, 100)
        setTimeout(function(){
            sentence2Text1.current.style.setProperty('left', 0)
            sentence2Text2.current.style.setProperty('right', 0)
            sentence2Text3.current.style.setProperty('left', 0)
            sentence2Text4.current.style.setProperty('bottom', 0)
        }, 300)
        setTimeout(function(){
            sentence3Text.current.style.setProperty('bottom', 0)
        }, 500)
        setTimeout(function(){
            sentence4Text1.current.style.setProperty('bottom', 0)
            sentence4Img.current.style.setProperty('bottom', 0)
        }, 700)
        setTimeout(function(){
            sentence4Text2.current.style.setProperty('bottom', 0)
            sentence4Text3.current.style.setProperty('right', 0)
            sentence4Text4.current.style.setProperty('left', 0)
            sentence4Text5.current.style.setProperty('right', 0)
        }, 900)
    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.sentence1}>
                <p ref={sentence1Text}>YOUNGJIK LEE</p>
                <div ref={sentence1Img} className={styles.mainImg1}></div>
            </div>
            <div className={styles.sentence2}>
                <div>
                    <p ref={sentence2Text1}>WHEN I'M NOT CODING,</p>
                    <p ref={sentence2Text2}>I ENJOY ADVENTURES</p>
                    <p ref={sentence2Text3}>IN THE WORLD OF YOUTUBE</p>
                </div>
                <p ref={sentence2Text4}>CRAFTING</p>
            </div>
            <div className={styles.sentence3}>
                <p ref={sentence3Text}>THE WORLD WITH CODE</p>
            </div>
            <div className={styles.sentence4}>
                <div ref={sentence4Img} className={styles.mainImg2}></div>
                <div>
                    <div className={styles.mainText}>
                        <p ref={sentence4Text1}>PORTFOLIO</p>
                    </div>
                    <div>
                        <p ref={sentence4Text2} className={styles.years}>© 2024</p>
                        <div>
                            <p ref={sentence4Text3}>IN MY FREE TIME,</p>
                            <p ref={sentence4Text4}>I ENJOY DIVING INTO BOOKS OR SURFING</p>
                            <p ref={sentence4Text5}>THE WEB FOR NEW DISCOVERIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main