import { useState, useRef, useEffect } from "react";
import styles from './WorkModal.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaExternalLinkAlt } from "react-icons/fa";
import mainImgTravelNote from "../assets/travelnote.png"
import imgTravelNote1 from "../assets/travelnote1.png"
import imgTravelNote2 from "../assets/travelnote2.png"
import imgTravelNote3 from "../assets/travelnote3.png"
import imgTravelNote4 from "../assets/travelnote4.png"
import imgTravelNote5 from "../assets/travelnote5.png"
import imgTravelNote6 from "../assets/travelnote6.png"
import imgTravelNote7 from "../assets/travelnote7.png"
import mainImgFlowerth from "../assets/flowerth.png"
import imgFlowerth1 from "../assets/flowerth1.png"
import imgFlowerth2 from "../assets/flowerth2.png"
import imgFlowerth3 from "../assets/flowerth3.png"
import imgFlowerth4 from "../assets/flowerth4.png"
import mainImgMichaelKors from "../assets/michaelkors.jpg"
import imgMichaelKors1 from "../assets/michaelkors1.png"
import imgMichaelKors2 from "../assets/michaelkors2.png"
import imgMichaelKors3 from "../assets/michaelkors3.png"
import imgMichaelKors4 from "../assets/michaelkors4.png"

const WorkModal = ({isOpen, handleModal, main, slides, location, clickedSlide}) => {
    const [work, setWork] = useState()

    const works = [
        {
            name: "TravelNote",
            url: "https://travelnotelyj.vercel.app/",
            description: 
                "- 코로나19로 인해 축소되었던 여행 시장이 완전히 회복하여 점차 증가하는 추세\n- 개인이 직접 일정을 계획하는 자유 여행객들이 증가하고 이 여행객들은 일정을 계획하는 데에만 약 10시간 이상의 시간이 소요\n- 이에 보다 편리하게 일정을 계획할 수 있는 웹사이트를 제작",
            period: "24.05.13 ~ 24.06.10",
            functions: "1) 여행 일정 계획 기능(구글 지도 API 연동)\n2) 여행 일정 확인 기능(날씨 정보 API 연동)\n3) 나의 여행 일정을 다른 사용자들에게 공유할 수 있는 기능\n4) 사용자들이 많이 등록한 여행지에 대한 통계, 목록",
            techStack: "HTML, CSS, JavaScript, React, MongoDB, Express 서버",
            contribution : "100%",
            imgSrcs: [mainImgTravelNote, imgTravelNote1, imgTravelNote2, imgTravelNote3, imgTravelNote4, imgTravelNote5, imgTravelNote6, imgTravelNote7]
        },
        {
            name: "꽃뜨 도자기카페",
            url: "https://flowerth.vercel.app/",
            description: "- 홍보와 안내\n- 이용자 예약 관리\n- 제품 판매",
            period: "24.03.19 ~ 24.04.04",
            functions: "1) 이용자 예약 기능(데이터베이스 미구현으로 Local storage 사용)\n2) 위치 안내(찾아오시는길, 카카오 지도 API 연동)\n3) 공지사항 페이지",
            techStack: "HTML, CSS, JavaScript",
            contribution : "100%",
            imgSrcs: [mainImgFlowerth, imgFlowerth1, imgFlowerth2, imgFlowerth3, imgFlowerth4]
        },
        {
            name: "Michael Kors",
            url: "https://michaelkors-clone.vercel.app/",
            description: "michaelkors-collection.com의 clone page",
            period: "24.03.08",
            functions: "이미지 팝업 슬라이드",
            techStack: "HTML, CSS, JavaScript",
            contribution : "100%",
            imgSrcs: [mainImgMichaelKors, imgMichaelKors1, imgMichaelKors2, imgMichaelKors3, imgMichaelKors4]
        }
    ]

    const closeModal = (e) => {
        if(e.target.className.includes('WorksContainer')){
            main.current.style.setProperty('overflow', 'auto')
            handleModal(false)
            for(let slide of slides){
                slide.style.setProperty('transform', 'scale(1)')
            }
        }
    }

    useEffect(() => {
        if(clickedSlide){
            const work = works.find(work => work.name === clickedSlide.id)
            setWork(work)
        }
        
        return () => {
            setWork()
        }
    }, [clickedSlide])

    useEffect(() => {
        if(location !== 'works' && isOpen){
            main.current.style.setProperty('overflow', 'auto')
            handleModal(false)
            for(let slide of slides){
                slide.style.setProperty('transform', 'scale(1)')
            }
        }
    }, [location])

    return (
        <div className={isOpen ?
            `${styles.WorksContainer} ${styles.show}` :
            `${styles.WorksContainer}`
        } onClick={closeModal}>
            <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
                direction='vertical'
                style={{
                    width: "303px",
                    height: "calc(100% - 302px)",
                    boxSizing: "border-box",
                    margin: "0"
                    // height : "100%",
                }}
            >
                {work && work.imgSrcs.map((imgSrc, id) => {
                    return(
                        <SwiperSlide
                            key={id}
                            style={{
                                width: "fit-content",
                                height: "fit-content",
                                display: "flex"
                            }}
                        >
                            <img src={imgSrc} className={styles.mainImg}></img>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className={styles.informationBox}>
                <div>
                    <h2>웹사이트명</h2>
                    <a href={work && work.url} target="_blank">
                        <p>{work && work.name}<FaExternalLinkAlt size="20"/></p>
                    </a>
                </div>
                <div>
                    <h2>목적 및 내용</h2>
                    <p>{work && work.description}</p>
                </div>
                <div>
                    <h2>기간</h2>
                    <p>{work && work.period}</p>
                </div>
                <div>
                    <h2>주요기능</h2>
                    <p>{work && work.functions}</p>
                </div>
                <div>
                    <h2>기술 스택</h2>
                    <p>{work && work.techStack}</p>
                </div>
                <div>
                    <h2>기여도</h2>
                    <p>{work && work.contribution}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkModal