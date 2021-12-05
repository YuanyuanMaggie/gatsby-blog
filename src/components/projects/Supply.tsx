import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>SupplyHouse.com (full-time)</h2>
          <p className="tags">Web (UI/UX) Developer</p>
        </div>
        <p className="project-description">
          Developed fully functional responsive new websites for e-commerce,
          using HTML5, CSS3, Bootstrap, jQuery, Java, AJAX and FreeMarker as
          well as tools like Sublime Text, Eclipse, SVN and Adobe Photoshop.{" "}
          <br />
          In addition to the development, I also designed prototypes based on
          business requirements and then translated prototypes and designs into
          clean, valid, and launch-ready pages. So I can bridge the gap between
          uiDesignal design and technical implementation, taking an active role
          on both sides and defined how the application looks as well as how it
          work.
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Front-end developer
          </p>
          <p>
            <b>Skills utilized:</b> web development
          </p>
        </div>

        <div className="project-wrapper">
          <h4>New websites project</h4>
          <div className="seeDemo">
            <a
              className="btn btn-xl"
              href="http://supplyhouse.com"
              target="_blank"
            >
              See New Websites
            </a>
          </div>
          <StaticImage
            src="../../images/projects/supply.gif"
            className="img-responsive gif"
            alt="supply"
          />
        </div>

        <div className="project-wrapper">
          <ul className="list-inline">
            <li>
              <b>Date:</b> Aug 2016 - Jan 2017
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)
