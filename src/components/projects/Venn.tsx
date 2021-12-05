import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Two Sigma (Venn Engineer)</h2>
          <p className="tags">Software Engineer</p>
        </div>
        <div className="project-description">
          <ul className="list">
            <li>
              Leading a six-person group to build clients facing features end to
              end. Front-end development in ReactJS, Typescript, AngularJS and
              others. Back-end development in Java using AWS cloud
            </li>
            <li>
              Responsible for converting ambiguous goals to realistic
              milestones, sprint planning & quarterly planning, designing
              architecture, code reviewing and also mentoring junior engineers
            </li>
            <li>
              Partnering closely with product managers, designers, sales,
              marketing and other stakeholders to drive decision-making
            </li>
            <li>
              Led reliability thread (3 - 4 engineers) to improve the unit
              testing coverage for frontend from 5% to 70%+, built automatic end
              to end testing framework from scratch (Cypress) that reduced
              release testing time significantly, built data quality engine and
              dashboard, and documented code guidelines, release/support
              processes and etc
            </li>
            <li>
              Introduced frontend best practices to the team such as keyboard
              accessibility, browser error monitoring, performance improvement,
              responsive css framework, and etc
            </li>
            <li>
              Proposing new features with prototypes all the time, rapidly
              iterated on them and got buy-in to launch such as admin portal,
              visualizing users data and customized reports
            </li>
            <li>
              Contributing to Two Sigma frontend community by teaching React
              class, hosting frontend/ux meetup and volunteering to improve
              others teams UI projects
            </li>
          </ul>
        </div>
        <div className="project-info">
          <p>
            <b>My role:</b> Full Stack Engineer
          </p>
          <p>
            <b>Skills utilized:</b> React/redux, Java, Eng Lead
          </p>
        </div>

        <div className="project-wrapper">
          <h4>Venn Dashboard</h4>
          <iframe
            src="https://player.vimeo.com/video/505397836?h=c1ca7ce0b6"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="seeDemo">
            <a
              className="btn btn-xl"
              href="https://venn.twosigma.com/"
              target="_blank"
            >
              See More in Marketing site
            </a>
          </div>
        </div>

        <div className="project-wrapper">
          <h4>Open Source Side Project - Africa Covid Dashboard</h4>

          <ul>
            <li>
              Github:{" "}
              <a href="https://github.com/tsdataclinic/AfricaCovidDashboard">
                https://github.com/tsdataclinic/AfricaCovidDashboard
              </a>
            </li>
          </ul>

          <div className="flex">
            <StaticImage
              src="../../images/projects/covid-africa.png"
              alt="Jetness 1"
              className="img-thumbnai img-responsive"
            />
          </div>
        </div>
        <div className="project-wrapper">
          <ul className="list-inline">
            <li>
              <b>Date:</b> July 2018 - Present
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)
