import { useState, useRef, useEffect } from "react";
import styles from './Contact.module.css'
import { FaGithub } from "react-icons/fa6";
import { ReactComponent as Lyj } from '../assets/Youngjik lee.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Contact = ({location}) => {
    const text1 = useRef(null)
    const input1Text = useRef(null)
    const input1 = useRef(null)
    const input2Text = useRef(null)
    const input2 = useRef(null)
    const input3Text = useRef(null)
    const input3 = useRef(null)
    const input4Text = useRef(null)
    const input4 = useRef(null)
    const button = useRef(null)

    const settings = {
        infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 2,
        accessibility: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        draggable: false,
        swipe: false,
        cssEase: "linear",
        useTransform: false,
        responsive: [
            {
                breakpoint: 100,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 2879,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 4319,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    useEffect(() => {
        if(location === 'contact'){
            setTimeout(function(){
                text1.current.style.setProperty('bottom', 0)
            }, 100)
            setTimeout(function(){
                input1Text.current.style.setProperty('bottom', 0)
                input1.current.style.setProperty('bottom', 0)
            }, 300)
            setTimeout(function(){
                input2Text.current.style.setProperty('bottom', 0)
                input2.current.style.setProperty('bottom', 0)
            }, 500)
            setTimeout(function(){
                input3Text.current.style.setProperty('bottom', 0)
                input3.current.style.setProperty('bottom', 0)
            }, 700)
            setTimeout(function(){
                input4Text.current.style.setProperty('bottom', 0)
                input4.current.style.setProperty('bottom', 0)
            }, 900)
            setTimeout(function(){
                button.current.style.setProperty('bottom', 0)
            }, 1100)
        } 
    }, [location])

    return (
        <>
            <div className={styles.contactContainer}>
                <div className={styles.titleBox}>
                    <h1 ref={text1}>CONTACT</h1>
                </div>
                <form>
                    <div>
                        <label ref={input1Text} htmlFor="name">이름</label>
                        <input ref={input1} type="text" name="name" id="name" placeholder="이름을 입력해주세요."></input>
                    </div>
                    <div>
                        <label ref={input2Text} htmlFor="email">이메일</label>
                        <input ref={input2} type="email" name="email" id="email" placeholder="이메일을 입력해주세요."></input>
                    </div>
                    <div>
                        <label ref={input3Text} htmlFor="title">제목</label>
                        <input ref={input3} type="text" name="title" id="title" placeholder="제목을 입력해주세요."></input>
                    </div>
                    <div>
                        <label ref={input4Text} className={styles.descriptionTitle} htmlFor="description">내용</label>
                        <textarea ref={input4} className={styles.description} type="text" name="description" id="description" placeholder="내용을 입력해주세요."></textarea>
                    </div>
                    <div>
                        <button ref={button} type="submit">SEND REQUEST</button>
                    </div>

                </form>
            </div>
            {location === 'contact' && 
                <footer className={styles.footer}>
                    <div className={styles.textBox}>
                        <a href="https://github.com/leeyoungjik1" target="_blank"><FaGithub size="36" color="white"/></a>
                        <div>
                            <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오로 제작되었습니다</p>
                            <p>© 2024 All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <Lyj/>
                            <Lyj/>
                            <Lyj/>
                            <Lyj/>
                            <Lyj/>
                            <Lyj/>
                        </Slider>
                    </div>

                </footer>
             }
            {/* <footer className={styles.footer}></footer> */}
        </>

    )
}

export default Contact