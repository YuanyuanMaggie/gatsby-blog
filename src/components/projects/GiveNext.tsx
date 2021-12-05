import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Business Consulting Project</h2>
          <p className="tags">Client: Donating StartUp GiveNext</p>
        </div>
        <p className="project-description">
          Collaborated with MBAs to make marketing strategies for the startup
          GiveNext to attract more donors, and designed a mobile app prototypes
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Consultant, UI/UX Designer
          </p>
          <p>
            <b>Skills utilized:</b> marketing and branding analysis, marketing
            research and competitive analysis, UI and UX design, design thinking
            approach to strategy, marketing and product development
          </p>
        </div>
        <div className="project-wrapper">
          <h4>About the client</h4>
          <p>
            GiveNext is eTrade™ for giving. GiveNext is a mobile and online
            platform where donors can transact and manage their charitable
            givings in partnership with the causes they care about. Once the
            portfolio of charities is compiled to a donor’s account and the
            donor’s payment information is entered once, GiveNext becomes the
            easiest way to give. Donor’s have instant access to their giving tax
            receipt and a mobile history of their charitable support.{" "}
          </p>
          <a
            href="https://givenext.com/"
            target="_blank"
            className="btn btn-xl"
          >
            GiveNext Home
          </a>
        </div>

        <div className="project-wrapper">
          <h4>Our activities</h4>
          <ul className="textleft">
            <li>
              Research the charitable giving market and understand the donor and
              nonprofit behaviors and decision-making
            </li>
            <li>
              Conduct a competitive analysis of the online giving (payment
              processing) market
            </li>
            <li>
              Identify key product benefits for target markets, and recommend
              key product features and enhancements to next version of product
            </li>
            <li>
              Create a marketing plan and branding strategy that lead to
              introduction of GiveNext to the charitable giving and nonprofit
              industry
            </li>
          </ul>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/givenext03-min.png"
            alt="givenext"
          />
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/givenext02-min.png"
            alt="givenext"
          />
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/givenext04-min.png"
            alt="givenext"
          />
        </div>

        <div className="project-wrapper">
          <h4>Prototypes Demo</h4>
          <iframe
            src="https://player.vimeo.com/video/162769295"
            width="500"
            height="281"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-wrapper">
          <h4>Our team</h4>
          <StaticImage
            className="img-responsive img-centered team-image"
            src="../../images/projects/givenext01-min.png"
            alt="team"
          />
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> Jan 2016 - May 2016
          </li>
          <li>
            <b>Client:</b> Daniel J Mansoor, Founder & CEO of GiveNext.com
          </li>
          <li>
            <b>Team members:</b> Jess Roth, Han-Eol (Ryan) Jang, Yuanyuan
            (Maggie) Li, Keyan (Kelly) Li, Tejaswini (TJ) Marathe
          </li>
        </ul>
      </div>
    </section>
  </div>
)
