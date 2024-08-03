import styles from './Footer.module.css'
import { FaGithub } from "react-icons/fa6";
import { ReactComponent as Lyj } from '../../assets/Youngjik lee.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        accessibility: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        draggable: false,
        swipe: false,
        cssEase: "linear",
        useTransform: false
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.textBox}>
                <a href="https://github.com/leeyoungjik1" target="_blank"><FaGithub size="36" color="white"/></a>
                <div>
                    <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오로 제작되었습니다</p>
                    <p>© 2024 All Rights Reserved</p>
                </div>
            </div>
            <div className="slider-containerMob">
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
    )
}

export default Footer