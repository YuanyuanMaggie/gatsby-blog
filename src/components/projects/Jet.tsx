import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import jetGIF from "../../images/projects/jet/jet-1.gif"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Jet.com (full-time)</h2>
          <p className="tags">Front End Engineer</p>
        </div>
        <div className="project-description">
          <ul className="list">
            <li>
              Leader of a five-person group charged with rebuilding order
              history flow with React & Redux. Responsible for planning, scoping
              and improving team's workflow each Agile sprint.{" "}
            </li>
            <li>
              Architected flexible analytics library to help a team of business
              analysts track customer behavior.
            </li>
            <li>
              Maintain features include customer checkout, search suggestions,
              and promotions. Work with the full toolkit of the front-end stack
              including pug (jade), Stylus and express.js (for development) and
              Cucumber, Mocha and WebdriverIO (for testing).
            </li>
            <li>
              Collaborating with product designers, product managers, marketing
              analytics, and API engineers to deliver features.
            </li>
            <li>
              Led a cross-function team won the top prize at Jet's internal
              hackathon (Jet Innovation Time). The idea has been developed into
              a new product line at Jet.
            </li>
            <li>
              Independently developed front-end load testing suite in C# for
              load-testing peak holiday demand. Worked with business analysts,
              DevOps and other upstream teams to scale the order system to be
              able to handle 3x the expected business goal.
            </li>
            <li>
              Experienced in front-end accessibility, cross-browser
              compatibility, search engine optimization (SEO), and web
              performance optimization.
            </li>
            <li>
              Served on pager duty for the team troubleshooting real-time
              production issues. The system supports hundreds of thousands of
              monthly transactions.
            </li>
            <li>Jet meetup presenter</li>
          </ul>
        </div>
        <div className="project-info">
          <p>
            <b>My role:</b> Front-end developer
          </p>
          <p>
            <b>Skills utilized:</b> React/redux, MVC, FE operation
          </p>
        </div>

        <div className="project-wrapper">
          <h4>Guest Checkout</h4>
          <img
            src={jetGIF}
            className="img-responsive gif"
            alt="jet guest checkout"
          />
        </div>

        <div className="project-wrapper">
          <h4>Jet Meetup Presentation</h4>
          <p className="tags">Front End Testing @ Jet.com</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tO1jsPOogFQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="seeDemo">
            <a
              className="btn btn-xl"
              href="https://github.com/YuanyuanMaggie/meetup/blob/master/Testing.pptx"
              target="_blank"
            >
              See Slide
            </a>
          </div>
        </div>

        <div className="project-wrapper">
          <h4>Jet Innovation Hackathon</h4>
          <p className="tags">Jetness</p>
          <iframe
            src="https://player.vimeo.com/video/256215412"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/256215412">Jetness Hackathon Demo</a>{" "}
            from <a href="https://vimeo.com/user49854291">Yuanyuan Li</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
          <ul>
            <li>
              Github:{" "}
              <a href="https://github.com/YuanyuanMaggie/jetness">
                https://github.com/YuanyuanMaggie/jetness
              </a>
            </li>
          </ul>
          <div className="flex">
            <StaticImage
              src="../../images/projects/jet/jetness1-min.png"
              alt="Jetness 1"
              className="img-thumbnai img-responsive"
            />

            <StaticImage
              src="../../images/projects/jet/jetness2-min.png"
              alt="Jetness 1"
              className="img-thumbnai img-responsive"
            />
          </div>
          <div className="seeDemo">
            <a
              className="btn btn-xl"
              href="https://jetness.herokuapp.com/"
              target="_blank"
            >
              See Demo Websites
            </a>
          </div>
        </div>

        <div className="project-wrapper">
          <h4>Jet Innovation Hackathon 2</h4>
          <p className="tags">Cooking with Jet</p>
          <iframe
            src="https://player.vimeo.com/video/256216284"
            width="640"
            height="311"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/256216284">Hackathon Demo</a> from{" "}
            <a href="https://vimeo.com/user49854291">Yuanyuan Li</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>

        <div className="project-wrapper">
          <ul className="list-inline">
            <li>
              <b>Date:</b> Jan 2017 - July 2018
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)
