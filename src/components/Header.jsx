import { useState, useEffect } from "react"
import { linklist } from "../assets/data/data"
import { NavLink } from "react-router-dom"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"


export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect( () => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 0)
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
            <h1>Header</h1>
        </>
    )
} 