// import image from '../../public/images/image.png';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { useTypewriter } from "../Hooks/useTypewriter";


export const Hero = () => {
    const words = ['Web Developer', 'Web Designer', 'Learner', 'Coder'];
    const text = useTypewriter(words);

    const socialIcons = [
        {
            id: 1,
            icon: <FaLinkedinIn size={20} />,
            link: "https://www.linkedin.com/in/PriyanshuSingh15/",
        },
        {
            id: 2,
            icon: <IoLogoGithub size={20} />,
            link: "https://github.com/Priyanshu150",
        },
        {
            id: 3,
            icon: <SiLeetcode size={20} />,
            link: "https://leetcode.com/u/Priyanshu_Kumar_Singh/",
        },
        {
            id: 4,
            icon: <SiGeeksforgeeks size={20} />,
            link: "https://www.geeksforgeeks.org/user/priyanshukumarsingh1502/",
        },
    ];

    return (
        <>
            <section className="hero-section">
                <div className="intro_text">
                    <svg viewBox="0 0 1320 300">
                        <text x="50%" y="50%" textAnchor="middle">
                            HI
                        </text>
                    </svg>
                </div>
                <div className="container">
                    <div className="content flexSB">
                        <div className="left w-half">
                            <div className="hero-content-box">
                                <span className="hero-sub-title">I am Priyanshu Singh</span>
                                <h1 className="hero-title">
                                    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
                                        {text}
                                        <span className="cursor">|</span>
                                    </div>
                                </h1>

                                {/* <div className="hero-image-box d-md-none text-center">
                                    <img src={image} alt=""/>
                                </div> */}

                                <p className="lead">I break down complex user experinece problems to create integritiy focussed solutions that connect people</p>

                                <div className="button-box flexG">
                                    <a href="../PRIYANSHU_RESUME.pdf" download className="btn tj-btn-secondary">
                                        Download CV <i className="flaticon-download"></i>
                                    </a>
                                    <ul className="ul-reset social-icons">
                                        {socialIcons.map((icon, index) => (
                                            <li key={index}>
                                                <a href={icon.link} target="_blank"  >{icon.icon}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right w-half">
                            <div className="hero-image-box text-center">
                                <img src="../images/image.png" alt="Profile Photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}