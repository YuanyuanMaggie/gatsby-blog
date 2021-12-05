import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Yumso Inc</h2>
          <p className="tags">Startup Co-founder</p>
        </div>
        <p className="project-description">
          Developed chefs/admins/drivers’ websites with AngularJS, D3.js, Sass,
          Bootstrap, jQuery, etc. Our app and website have been launched and put
          into production. I also executed and contributed to full-stack web
          development projects, with an emphasis on front end features, browser
          manipulation, and cross-browser compatibility
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Full Stack Developer, UX Designer
          </p>
          <p>
            <b>Skills utilized:</b> AngularJS, data visualization, UX Design,
            Rapid Prototypes, Remote Collaboration
          </p>
        </div>
        <div className="project-wrapper">
          <h4>About Company</h4>
          <p>
            Yumso is a marketplace where you can explore and order authentic
            gourmets made by cooking aficionados in your community. Bringing you
            the taste of home, Yumso improves food safety through unique
            supervision system. Our efficient delivery services bring freshly
            cooked meals to your door with small costs. Always enjoy
            high-quality food in the way you want, at the time you want.
          </p>
          <p>
            You can also apply to be a cater on Yumso to share your home-style
            cooking with other food lovers. Value your time in your own kitchen,
            and make money at the mean time.
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Ideas start from frames</h4>
          <h5>Admin panel frame sketch</h5>
          <StaticImage
            src="../../images/projects/yumso04.png"
            className="img-responsive"
            alt="admin"
          />
          <h5>Driver workflow frame sketch</h5>
          <StaticImage
            src="../../images/projects/yumso05.png"
            className="img-responsive"
            alt="driver"
          />
        </div>

        <div className="project-wrapper">
          <h4>Then translated ideas to responsive web apps</h4>
          <div className="seeDemo">
            <a className="btn btn-xl" href="http://yumso.com" target="_blank">
              See Demo
            </a>
          </div>
          <StaticImage
            src="../../images/portfolio/yumso-min.png"
            className="img-responsive"
            alt="yumso"
          />
        </div>

        <ul className="list-inline">
          <li>
            <b>Date:</b> May 2016 - Present
          </li>
        </ul>
      </div>
    </section>
  </div>
)
