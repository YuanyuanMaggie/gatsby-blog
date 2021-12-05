import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Non-profit Business Solution</h2>
          <p className="tags">Hackathon project</p>
        </div>
        <p className="project-description">
          Designed a sollution to help raise awareness about food accesibility
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Developer
          </p>
          <p>
            <b>Skills utilized:</b> agile web development, business analysis and
            presentation
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Target problems</h4>
          <p>
            Family and Children Services of Ithaca has witnessed there is a lack
            of basic resources for low income individuals and families and
            people in poverty to feed themselves or their families on a daily
            basis. Many individuals sit or stand with a sign requesting money
            for food, for housing, or basic survival. Community members
            sometimes respond with money and / or food. The act of holding a
            sign can degrade the self- esteem of individuals as well as it is
            not welcome site to members of the community. The organization would
            like to see an alternative way for individuals to donate and receive
            the funds they need to eat.
          </p>
        </div>

        <div className="project-wrapper">
          <h4>Our solutions</h4>
          <p>
            Pro Bonobos is a program designed to help raise awareness about food
            insecurity. It would help low income individuals and families in
            poverty to feed themselves on a daily basis
          </p>
          <div className="seeDemo">
            <a
              href="http://probonobos.github.io/rhok/"
              className="btn btn-xl"
              target="_blank"
            >
              See Demo
            </a>
          </div>
          <StaticImage
            src="../../images/projects/solution-min.png"
            className="img-responsive"
            alt="probonobos"
          />
          <StaticImage
            src="../../images/portfolio/p9-nonprofit-min.png"
            className="img-responsive"
            alt="probonobos"
          />
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> November 2015
          </li>
          <li>
            <b>Client:</b> Tammy Baker, Family and Children Services of Ithaca
          </li>
          <li>
            <b>Team members:</b>Karen Tan, Jiyoung Oh, Yuanyuan Li, Jennifer
            Lee, Greta Jenkins, Brett Granum
          </li>
        </ul>
      </div>
    </section>
  </div>
)
