import { useState, useRef, useEffect } from "react";
import styles from './Main.module.css'

const Main = () => {
    const sentence1Text = useRef(null)
    const sentence2Text1 = useRef(null)
    const sentence2Text2 = useRef(null)
    const sentence2Text3 = useRef(null)
    const sentence2Img = useRef(null)
    const sentence3Text = useRef(null)
    const sentence4Text = useRef(null)
    const sentence5Text = useRef(null)
    const sentence6Text = useRef(null)
    const sentence7Img = useRef(null)
    const sentence7Text = useRef(null)
    const sentence8Text1 = useRef(null)
    const sentence8Text2 = useRef(null)
    const sentence8Text3 = useRef(null)


    useEffect(() => {
        setTimeout(function(){
            sentence1Text.current.style.setProperty('bottom', 0)
        }, 100)
        setTimeout(function(){
            sentence2Text1.current.style.setProperty('left', 0)
            sentence2Text2.current.style.setProperty('right', 0)
            sentence2Text3.current.style.setProperty('left', 0)
            sentence2Img.current.style.setProperty('bottom', 0)
        }, 300)
        setTimeout(function(){
            sentence3Text.current.style.setProperty('bottom', 0)
        }, 500)
        setTimeout(function(){
            sentence4Text.current.style.setProperty('bottom', 0)
        }, 700)
        setTimeout(function(){
            sentence5Text.current.style.setProperty('bottom', 0)
        }, 900)
        setTimeout(function(){
            sentence6Text.current.style.setProperty('bottom', 0)
        }, 1100)
        setTimeout(function(){
            sentence7Img.current.style.setProperty('bottom', 0)
            sentence7Text.current.style.setProperty('bottom', 0)
        }, 1300)
        setTimeout(function(){
            sentence8Text1.current.style.setProperty('right', 0)
            sentence8Text2.current.style.setProperty('left', 0)
            sentence8Text3.current.style.setProperty('right', 0)
        }, 1500)
    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.sentence1}>
                <p ref={sentence1Text}>YOUNGJIK LEE</p>
            </div>
            <div className={styles.sentence2}>
                <div className={styles.sentence2Textbox}>
                    <p ref={sentence2Text1}>WHEN I'M NOT CODING,</p>
                    <p ref={sentence2Text2}>I ENJOY ADVENTURES</p>
                    <p ref={sentence2Text3}>IN THE WORLD OF YOUTUBE</p>
                </div>
                <div ref={sentence2Img} className={styles.mainImg1}></div>
            </div>
            <div className={styles.sentence3}>
                <p ref={sentence3Text}>CRAFTING</p>
            </div>
            <div className={styles.sentence4}>
                <p ref={sentence4Text}>THE WORLD</p>
            </div>
            <div className={styles.sentence5}>
                <p ref={sentence5Text}>WITH CODE</p>
            </div>
            <div className={styles.sentence6}>
                <p ref={sentence6Text}>PORTFOLIO</p>
            </div>
            <div className={styles.sentence7}>
                <div ref={sentence7Img} className={styles.mainImg2}></div>
                <div className={styles.sentence7Textbox}>
                    <p ref={sentence7Text} className={styles.years}>© 2024</p>
                    <p ref={sentence8Text1}>IN MY FREE TIME,</p>
                </div>
            </div>
            <div className={styles.sentence8}>
                <div>
                    <p ref={sentence8Text2}>I ENJOY DIVING INTO BOOKS OR SURFING</p>
                    <p ref={sentence8Text3}>THE WEB FOR NEW DISCOVERIES</p>
                </div>
            </div>
        </div>
    )
}

export default Main