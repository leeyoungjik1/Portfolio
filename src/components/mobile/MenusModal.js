import styles from './MenusModal.module.css'
import { FaXmark } from "react-icons/fa6";


const MenusModal = ({isOpen, handleModal, handelLogo, page}) => {

    const closeModal = (e) => {
        if(e.target.tagName === 'path' ||
            e.target.tagName === 'svg' ||
            !e.target.className.includes('logo') && 
            !e.target.className.includes('menusbtn')){
            handleModal(false)
        }
    }

    const handleClick = (e) => {
        // if(e.target.innerHTML === 'ABOUT'){
        //     page.aboutPage.current.scrollIntoView(true)
        // }else if(e.target.innerHTML === 'WORKS'){
        //     page.worksPage.current.scrollIntoView(true)
        // }else if(e.target.innerHTML === 'CONTACT'){
        //     page.contactPage.current.scrollIntoView(true)
        // }else if(e.target.innerHTML === 'GITHUB'){
        //     console.log('깃허브')
        // }
    }

    return (
        <div className={isOpen ?
            `${styles.ModalContainer} ${styles.show}` :
            `${styles.ModalContainer}`
        } onClick={closeModal}>
            <div className={styles.header}>
                <h1 className={styles.logo} onClick={handelLogo}>YOUNGJIK LEE</h1>
                <FaXmark className="xMark" size={26} color="white"/>
            </div>
            <div className={styles.mainContainer}>
                <ul className={styles.menusContainer} onClick={handleClick}>
                    <li className={styles.menusbtn}>ABOUT</li>
                    <li className={styles.menusbtn}>WORKS</li>
                    <li className={styles.menusbtn}>CONTACT</li>
                    <li className={styles.menusbtn}>GITHUB</li>
                </ul>
                <div className={styles.footer}>
                    <p>© 2024 All RIGHTS RESERVED</p>
                    <p>YOUNGJIK LEE</p>
                </div>
            </div>


        </div>
    )
}

export default MenusModal