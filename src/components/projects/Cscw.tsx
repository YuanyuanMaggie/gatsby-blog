import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Computer Supported Collaboration Research</h2>
          <p className="tags">Facilitation Collabration Research Lab</p>
        </div>
        <p className="project-description">
          Designed efficient and effective progresses for collaborative teams.
          In this research experience, I improved my research and writing skills
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> UX Researcher
          </p>
          <p>
            <b>Skills utilized:</b> user experience research, data analysis
            (SPSS), php web development and writing skills
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Research Experience</h4>
          <ul>
            <li>
              Constructed collaborative models by reviewing 30+ papers from IS
              top journals
            </li>
            <li>Identified research topics independently</li>
            <li>Interviewed 100+ people after experiments</li>
            <li>
              Analyzed 100+ transcripts and self-learned statistic analysis
              methods
            </li>
            <li>
              Self-developed tools:{" "}
              <a href="http://www.brainstorming.sinaapp.com">
                (www.brainstorming.sinaapp.com/)
              </a>
            </li>
          </ul>
        </div>

        <div className="project-wrapper">
          <h4>Publications</h4>
          <ul>
            <li>
              {" "}
              “Application of a Novel Collaboration Engineering Method for
              Learning Design: A Case Study”, SSCI journal: British Journal of
              Educational Technology, 2015 (
              <a
                href="http://onlinelibrary.wiley.com/doi/10.1111/bjet.12382/full"
                target="_blank"
              >
                {" "}
                See details{" "}
              </a>
              ||
              <a href="documents/BJET.pdf" target="_blank">
                View pdf
              </a>{" "}
              )
            </li>
            <li>
              {" "}
              “Can We Solve Low Participation, Distraction, and Inefficiency? A
              Case Study of Distributed Collaborative Learning in Industries”,
              48th Hawaii International Conference on System Sciences (#2 in
              information system), 2015 (
              <a
                href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7069699"
                target="_blank"
              >
                {" "}
                See details{" "}
              </a>
              ||
              <a href="documents/can_we_ solve.pdf" target="_blank">
                View pdf
              </a>{" "}
              )
            </li>
            <li>
              {" "}
              “Collaboration Information System Adoption in Hospitality”, 18th
              Pacific Asia Conference on Information Systems, 2014(
              <a
                href="http://aisel.aisnet.org/cgi/viewcontent.cgi?article=1376&context=pacis2014"
                target="_blank"
              >
                {" "}
                See details{" "}
              </a>
              ||
              <a href="documents/aisel.pdf" target="_blank">
                View pdf
              </a>{" "}
              )
            </li>
            <li>
              {" "}
              “Easy Collaboration Process Support System Design for Student
              Collaborative Group Work”, 47th Hawaii International Conference on
              System Sciences, 2014(
              <a
                href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6758660&tag=1"
                target="_blank"
              >
                {" "}
                See details{" "}
              </a>
              ||
              <a href="documents/easy.pdf" target="_blank">
                View pdf
              </a>{" "}
              )
            </li>
            <li>
              {" "}
              “An Online Collaboration Process Design for the Student
              Organization”, Journal of Theoretical and Applied Information
              Technology, 2012 (
              <a
                href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.299.8811&rep=rep1&type=pdf"
                target="_blank"
              >
                {" "}
                See details{" "}
              </a>
              ||
              <a href="documents/online.pdf" target="_blank">
                View pdf
              </a>{" "}
              )
            </li>
          </ul>
        </div>

        <div className="project-wrapper">
          <h4>Design brainstorming</h4>
          <div id="sketchSlider">
            <h5>First Sketch</h5>
            <StaticImage
              className="img-responsive"
              src="../../images/projects/cscw1-min.png"
              alt="discussion-screen"
            />
            <h5>Final Design</h5>
            <StaticImage
              className="img-responsive"
              src="../../images/projects/cscw2-min.png"
              alt="discussion-screen"
            />
          </div>
          <h4>Responsive development</h4>
          <p>PHP, Apache, Windows, MySQL</p>
          <a
            className="btn btn-xl"
            href="http://www.brainstorming.sinaapp.com"
            target="_blank"
          >
            See Demo
          </a>
          <div>
            <h5>Launched App</h5>
            <StaticImage
              className="img-responsive"
              src="../../images/projects/cscw3-min.png"
              alt="discussion-screen"
            />
          </div>
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> October 2012 - Octorber 2014
          </li>
        </ul>
      </div>
    </section>
  </div>
)
