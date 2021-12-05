import { Link } from "gatsby"
import * as React from "react"
import Blog from "../components/Blog"
import Portfolio from "../components/Portfolio"
import Profile from "../components/Profile"
import Seo from "../components/seo"
import Skills from "../components/Skills"
import TopMenu, { menuItems, SectionType } from "../components/TopMenu"

const Home = ({ location }) => {
  const sectionType =
    location?.search.split("section=")[1] ?? ("NONE" as SectionType)

  return (
    <>
      <Seo title="Yuanyuan Li" />
      {sectionType !== "NONE" && <TopMenu sectionType={sectionType} />}
      <section className="home">
        <div className="container">
          <div
            className={`name-block ${sectionType !== "NONE" ? "reverse" : ""}`}
          >
            <div
              className={`name-block-container ${
                sectionType !== "NONE" ? "reverse" : ""
              }`}
            >
              <h1>
                <span>Hi, I'm</span>Yuanyuan Li
              </h1>
              <h2>Full Stack Engineer</h2>
              <a
                className="btn btn-download"
                href="/documents/YuanyuanLi-Resume.pdf"
                download
              >
                Download Resume
              </a>
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuanyuanmaggie/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/YuanyuanMaggie" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yuanyuanmaggie/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/maggie.li.39904"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {sectionType === "NONE" && (
            <div className="menu-blocks">
              {menuItems.map(item => (
                <Link
                  key={item.sectionType}
                  to={`/?section=${item.sectionType}`}
                >
                  <div className={`${item.class}-block`}>
                    <div className={`${item.class}-block-container`}>
                      <h2 className={`${item.class} menu-item`}>
                        {item.label}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {sectionType === "PROFILE" && <Profile />}
          {sectionType === "PORTFOLIO" && <Portfolio />}
          {sectionType === "BLOG" && <Blog />}
          {sectionType === "SKILLS" && <Skills />}
        </div>
      </section>
    </>
  )
}

export default Home
