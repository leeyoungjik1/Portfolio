import { useState, useRef, useEffect } from "react";
import styles from './About.module.css'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa6";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/scrollbar';

const skills = [
    {
        name: 'HTML',
        code: 'FaHtml5',
        color: '#FC490B'
    },
    {
        name: 'CSS',
        code: 'FaCss3Alt',
        color: '#2196F3'
    },
    {
        name: 'JavaScript',
        code: 'SiJavascript',
        color: '#FFDF00'
    }
]

const About = ({location}) => {
    const text1 = useRef(null)
    const text2 = useRef(null)
    const text3 = useRef(null)
    const text4 = useRef(null)
    const text5 = useRef(null)
    const text6 = useRef(null)
    const skillsBox = useRef(null)
    const text7 = useRef(null)
    const text8 = useRef(null)
    const text9 = useRef(null)
    const text10 = useRef(null)
    const photoBox = useRef(null)
    const text11 = useRef(null)
    const text12 = useRef(null)
    const text13 = useRef(null)
    const text14 = useRef(null)
    const text15 = useRef(null)
    const text16 = useRef(null)
    const text17 = useRef(null)
    const text18 = useRef(null)
    const text19 = useRef(null)
    const text20 = useRef(null)
    

    useEffect(() => {
        if(location === 'about'){
            setTimeout(function(){
                text1.current.style.setProperty('bottom', 0)
            }, 100)
            setTimeout(function(){
                text2.current.style.setProperty('bottom', 0)
            }, 300)
            setTimeout(function(){
                text3.current.style.setProperty('bottom', 0)
            }, 500)
            setTimeout(function(){
                text4.current.style.setProperty('bottom', 0)
                text5.current.style.setProperty('bottom', 0)
                text6.current.style.setProperty('bottom', 0)
                skillsBox.current.style.setProperty('bottom', 0)
            }, 700)
            setTimeout(function(){
                text7.current.style.setProperty('bottom', 0)
                text8.current.style.setProperty('bottom', 0)
                text9.current.style.setProperty('bottom', 0)
                text10.current.style.setProperty('bottom', 0)
                photoBox.current.style.setProperty('bottom', '0vh')
            }, 900)
            setTimeout(function(){
                text11.current.style.setProperty('bottom', 0)
                text12.current.style.setProperty('bottom', 0)
                text13.current.style.setProperty('bottom', 0)
                text14.current.style.setProperty('bottom', 0)
                text15.current.style.setProperty('bottom', 0)
                text16.current.style.setProperty('bottom', 0)
                text17.current.style.setProperty('bottom', 0)
            }, 1100)
        }

    }, [location])

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.infomationContainer}>
                <div className={styles.titleBox}>
                    <h1 ref={text1}>ABOUT</h1>
                </div>
                <div>
                    <div className={styles.nameContainer}>
                        <div className={styles.nameBox}>
                            <p ref={text2}>LEE</p>
                        </div>
                        <div className={styles.nameBox}>
                            <p ref={text3}>YOUNGJIK</p>
                        </div>
                    </div>
                    <div className={styles.infomationBox}>
                        <div>
                            <div className={styles.birthBox}>
                                <div className={styles.h2Container}>
                                    <h2 ref={text4}>DATE OF BIRTH</h2>
                                </div>
                                <p ref={text5}>AUGUST 10, 1991</p>
                            </div>
                            <div>
                                <div className={styles.h2Container}>
                                    <h2 ref={text6}>TECHNICAL SKILLS</h2>
                                </div>
                                <Swiper
                                    modules={[Scrollbar]}
                                    spaceBetween={15}
                                    slidesPerView={"auto"}
                                    centeredSlides={false}
                                    scrollbar={{ draggable: true}}
                                    style={{
                                        width : "300px",
                                        height : "100%",
                                        position: "relative",
                                        transition: "ease .65s",
                                        bottom: "-67px"
                                    }}
                                    ref={skillsBox}
                                >
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <FaHtml5 size="30" color="#FC490B"/>
                                            <p>HTML</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <FaCss3Alt size="30" color="#2196F3"/>
                                            <p>CSS</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <SiJavascript size="30" color="#FFDF00"/>
                                            <p>JavaScript</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <FaReact size="30" color="#80DEEA"/>
                                            <p>React</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <SiMongodb size="30" color="#689F38"/>
                                            <p>MongoDB</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.skillBox}>
                                            <FaFigma size="30" color="#689F38"/>
                                            <p>Figma</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div>
                            <div className={styles.phoneBox}>
                                <div className={styles.h2Container}>
                                    <h2 ref={text7}>CONTACT INFOMATION</h2>
                                </div>
                                <p ref={text8}>010-7654-6541</p>
                            </div>
                            <div className={styles.emailBox}>
                                <div className={styles.h2Container}>
                                    <h2 ref={text9}>EMAIL</h2>
                                </div>
                                <p ref={text10}>eog91@naver.com</p>
                            </div>
                        </div>
                        <div className={styles.experienceBox}>
                            <div className={styles.h2Container}>
                                <h2 ref={text11}>WORK EXPERIENCE</h2>
                            </div>
                            <div className={styles.experienceContainer}>
                                <div>
                                    <p ref={text12}>2023.12 ~ 2024.06 그린컴퓨터아트학원</p>
                                    <p ref={text13} style={{fontSize:"20px"}}>- React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) 과정 수료</p>
                                </div>
                                <div>
                                    <p ref={text14}>2019.04 ~ 2023.03 ㈜건강한한우</p>
                                    <p ref={text15} style={{fontSize:"20px"}}>- 한우 물품 운영</p>
                                </div>
                                <div>
                                    <p ref={text16}>2016.06 ~ 2018.01 iCOOP인증센터</p>
                                    <p ref={text17} style={{fontSize:"20px"}}>- 인증 농축산물 검증</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.photoBox}>
                <div ref={photoBox} className={styles.photo}>
                    <div className={styles.noiseEffect}></div>
                    <div className={styles.blueEffect}></div>
                </div>
            </div>
        </div>
    )
}

export default About