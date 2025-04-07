import { linklist } from "../assets/data/data";
import { TbCircleSquare } from "react-icons/tb";

export const Footer = () => {
    return (
        <>
            <footer className="tj-footer-area">
                <div className="container text-center">
                    <div className="logo-box">
                            {/* <div><p><TbCircleSquare />Portfolio</p> </div> */}
                    </div>
                    <div className="footer-menu">
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
                    <div className="copy-text">
                        <p>
                            &copy; 2025 All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
