import { useState } from "react";
import styles from './GNB.module.css'
import { ReactComponent as HamButton } from '../../assets/hamburgerButton.svg'
import MenusModal from "./MenusModal";


const GNB = ({page}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handelLogo = () => {
        window.location.replace("/")
    }

    const handlebtn = () => {
        setIsOpenModal(true)
    }

    const handleModal = (isOpen) => {
        setIsOpenModal(isOpen)
    }

    return (
        <>
            <nav className={styles.navMob}>
                <h1 className={isOpenModal ? `${styles.hide}` : null} onClick={handelLogo}>YOUNGJIK LEE</h1>
                <HamButton className={isOpenModal ? `${styles.hide}` : null} onClick={handlebtn}/>
                <MenusModal
                    isOpen={isOpenModal}
                    handleModal={handleModal}
                    handelLogo={handelLogo}
                    page={page}
                />
            </nav>
            
        </>

    )
}

export default GNB