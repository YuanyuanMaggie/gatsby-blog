import * as React from "react"
const Tree = React.lazy(() => import("./Tree"))

const Skills = () => (
  <div className="content-blocks blog">
    <section className="content">
      <div className="block-content ">
        <h3 className="block-title">Skills</h3>
        <div className="row">
          <div className="col-sm-6">
            <h4>Technical Skill Highlights</h4>
            <div className="row">
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>React - Typescript/ES6</li>
                  <li>Java - Dropwizard</li>
                  <li>Python - Flask</li>
                  <li>UI Testing - Jest/Cypress</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h4>Non-Technical Skill Highlights</h4>
            <div className="row">
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>Rapid prototyping</li>
                  <li>UI/UX Design - Figma/Sketch 3</li>
                  <li>Sprint Planning</li>
                  <li>Cross-Functional Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>Others</h4>
            <div className="row">
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>AngularJS+</li>
                  <li>Vue</li>
                  <li>D3.js/Highchart</li>
                  <li>CI/CD</li>
                  <li>Postgress/MongoDB</li>
                  <li>Npm/Yarn</li>
                  <li>AWS</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>Flutter</li>
                  <li>PHP</li>
                  <li>Swift</li>
                  <li>Pub(Jade)</li>
                  <li>Sass/Scss/Stylus</li>
                  <li>GraphQL</li>
                  <li>A11Y</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Suspense fallback={<div>loading skils chart...</div>}>
        <Tree />
      </React.Suspense>
    </section>
  </div>
)

export default Skills
