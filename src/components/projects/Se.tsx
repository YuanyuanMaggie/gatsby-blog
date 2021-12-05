import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Software Engineering Project</h2>
          <p className="tags">Class project</p>
        </div>
        <p className="project-description">
          Developed a web application that will enable researchers to run
          surveys and research investigations online{" "}
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Front-end developer
          </p>
          <p>
            <b>Skills utilized:</b> requirements analysis, rapid prototyping
            (Axure), front-end development (html, javascript, jade, node.js,
            bootstrap, mongoDB)
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Software development process</h4>
          <div className="timeline">
            <div className="row">
              <div className="col-md-12">
                <div className="exp">
                  <div className="hgroup">
                    <h4>Feasibility study and planning</h4>
                  </div>
                  <p>
                    Defined the aim of this project is to develop the video
                    hosting and file system component for the MERID project,
                    which is studying creativity in orchestras, and to integrate
                    this component with the rest of the MERID system.
                  </p>
                  <p>
                    -Documents:{" "}
                    <a href="documents/FeasibilityStudy.pdf" target="_blank">
                      {" "}
                      Feasibility Study{" "}
                    </a>{" "}
                  </p>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Requirements</h4>
                  </div>
                  <p>
                    Established the system's functionality, constraints, and
                    goals by consultation with the client.
                  </p>
                  <p className="text-muted">
                    Used iterative rapid prototypes to further communicate with
                    client. Gained the client's high appreciation for the
                    prototype design.
                  </p>
                  <p>
                    <b>Documents: </b>
                    <a href="documents/requirement.pdf" target="_blank">
                      {" "}
                      Requirement Analysis
                    </a>
                  </p>
                  <a
                    href="http://op05ah.axshare.com/"
                    target="_blank"
                    className="btn btn-sm"
                  >
                    See Demo
                  </a>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>System and Program Design</h4>
                  </div>
                  <ul>
                    <b>Documents: </b>
                    <li>
                      <a href="documents/SystemDesign.pdf" target="_blank">
                        {" "}
                        System Design
                      </a>
                    </li>
                    <li>
                      <a href="documents/DataModel.pdf" target="_blank">
                        {" "}
                        Data Model
                      </a>
                    </li>
                    <li>
                      <a
                        href="documents/UseCasesandUserWorkflow.pdf"
                        target="_blank"
                      >
                        {" "}
                        Use Cases and User Workflow
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Implementa1on(coding)</h4>
                  </div>
                  <p className="text-muted">
                    Iteratively developed and implemented each of the core
                    features.
                  </p>
                  <p>
                    <b>Documents: </b>
                    <a href="documents/FinalReport.pdf" target="_blank">
                      {" "}
                      Final Report
                    </a>
                  </p>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Launch App</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-wrapper">
          <div className="row pic">
            <div className="col-md-3 col-xs-6">
              <div>
                <h3>System design</h3>
              </div>
              <a href="../../images/projects/SE01-min.png">
                <StaticImage
                  className="img-responsive"
                  src="../../images/projects/SE01-min.png"
                  alt="System Design"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6">
              <div>
                <h3>Data Model</h3>
              </div>
              <StaticImage
                className="projects-responsive"
                src="../../images/projects/SE02-min.png"
                alt="Data Model"
              />
            </div>
            <div className="col-md-3 col-xs-6">
              <div>
                <h3>Use Cases</h3>
              </div>
              <StaticImage
                className="projects-responsive"
                src="../../images/projects/SE03-min.png"
                alt="Use Cases"
              />
            </div>
            <div className="col-md-3 col-xs-6">
              <div>
                <h3>Prototypes</h3>
              </div>
              <StaticImage
                className="projects-responsive"
                src="../../images/projects/SE04-min.png"
                alt="Prototypes"
              />
            </div>
          </div>
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> September 2015 - December 2015
          </li>
          <li>
            <b>Client:</b> Graeme Bailey, Computer Science Department; Celine
            Brass, Technical Advisor and Liaison
          </li>
          <li>
            <b>Team members:</b> Yuanyuan Li (Maggie), Chenxi Su, Lucas
            Derraugh, Laurence Rosenzweig, Darcy A. Branchini, Chen Fang, Vinita
            Gogate
          </li>
        </ul>
      </div>
    </section>
  </div>
)
