import { useState, useEffect } from "react"
import { linklist } from "../assets/data/data"
import { NavLink } from "react-router-dom"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"
import { TbCircleSquare } from "react-icons/tb";


export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0)
                setIsSticky(true);
            else
                setIsSticky(false);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
                <div className="container flexSB">
                    <div className="logo-box">
                        <div className="app-name"><TbCircleSquare />Portfolio</div>
                    </div>
                    <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
                        <nav>
                            <ul>
                                {linklist.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.link}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flexSB">
                        <div className="header-button">
                            <NavLink to="../PRIYANSHU_RESUME.pdf" target="_blank" className="btn tj-btn-primary">
                                View Resume
                            </NavLink>
                        </div>
                        <div className="menu-icon" onClick={toggleMenu}>
                            {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
} 