import * as React from "react"
const Tree = React.lazy(() => import("./Tree"))

const Skills = () => (
  <div className="content-blocks blog">
    <section className="content">
      <div className="block-content ">
        <h3 className="block-title">Skills</h3>
        <div className="row">
          <div className="col-sm-6">
            <h4>Technical Skills</h4>
            <div className="row">
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>AngularJS</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>D3.js</li>
                  <li>Git</li>
                  <li>HTML5</li>
                  <li>Java</li>
                  <li>JavaScript/ES6</li>
                  <li>jQuery</li>
                  <li>MySql/MongoDB</li>
                  <li>Node/Express</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>NPM/Yarn</li>
                  <li>PHP</li>
                  <li>Pub(Jade)</li>
                  <li>React/Redux</li>
                  <li>Sass/Scss</li>
                  <li>Sketch 3</li>
                  <li>SQL</li>
                  <li>Stylus/Sass</li>
                  <li>Swift</li>
                  <li>inVision</li>
                  <li>SVN</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h4>Know-how</h4>
            <div className="row">
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>UX Research</li>
                  <li>Responsive Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Rapid prototyping</li>
                  <li>Data visualization</li>
                  <li>Database Design and Management</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="icon-list">
                  <li>iOS App Development</li>
                  <li>Agile Development Methodologies</li>
                  <li>Data Structure and Algorithms</li>
                  <li>Version Control</li>
                  <li>Cross-Functional Team Collaboration</li>
                  <li>Presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tree />
    </section>
  </div>
)

export default Skills
