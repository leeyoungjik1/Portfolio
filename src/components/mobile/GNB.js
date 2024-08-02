import { useState } from "react";
import styles from './GNB.module.css'
import { ReactComponent as HamButton } from '../../assets/hamburgerButton.svg'
import MenusModal from "./MenusModal";


const GNB = ({isOpenModal, handleModal, handelLogo}) => {
    const handlebtn = () => {
        handleModal(true)
    }

    return (
        <nav className={styles.navMob}>
            <h1 className={isOpenModal ? `${styles.hide}` : null} onClick={handelLogo}>YOUNGJIK LEE</h1>
            <HamButton className={isOpenModal ? `${styles.hide}` : null} onClick={handlebtn}/>
        </nav>
    )
}

export default GNB