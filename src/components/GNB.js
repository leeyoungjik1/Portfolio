import { useRef} from "react";
import './GNB.module.css'

const GNB = ({page}) => {
    const nav = useRef(null)

    const handelLogo = () => {
        window.location.replace("/")
    }

    const handleClick = (e) => {
        if(e.target.innerHTML === 'ABOUT'){
            page.aboutPage.current.scrollIntoView(true)
        }else if(e.target.innerHTML === 'WORKS'){
            page.worksPage.current.scrollIntoView(true)
        }else if(e.target.innerHTML === 'CONTACT'){
            page.contactPage.current.scrollIntoView(true)
        }
        
    }

    return (
        <nav ref={nav}>
            <h1 onClick={handelLogo}>YOUNGJIK LEE</h1>
            <ul onClick={handleClick}>
                <li>ABOUT</li>
                <li>WORKS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default GNB