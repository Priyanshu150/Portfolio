import { NavLink } from "react-router-dom"
import { projects } from "../assets/data/data"
import { GoArrowUpRight } from "react-icons/go"

export const Portfolio = () => {
    return (
        <>
            <section className="portfolio-search" id="work">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">My Recent Works</h2>
                        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you.</p>
                    </div>

                    <div className="portfolio-filter text-center">
                        <div className="button-group filter-button-group">
                            <button>All</button>
                            <button>Frontend</button>
                            <button>Backend</button>
                            <div className="active-bg"></div>
                        </div>
                    </div> 

                    <div className="portfolio-box">
                        <div className="grid2">
                            {projects.map((project) => (
                                <div className="portfolio-item branding" key={project.id}>
                                    <div className="image-box">
                                        <img src={project.cover} alt="" />
                                    </div>
                                    <div className="content-box">
                                        <NavLink to="https://github.com/Priyanshu150/WebDevProjects/tree/main">
                                            <h3 className="portfolio-title">{project.title}</h3>
                                        </NavLink>
                                        <p>{project.desc}</p>
                                        <i>
                                            <GoArrowUpRight size={50} />
                                        </i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}