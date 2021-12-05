import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Profile = () => (
  <div className="content-blocks about">
    <section className="content">
      <div className="block-content">
        <h3 className="block-title">Who am I?</h3>
        <div className="row">
          <div className="col-md-7">
            <p>
              I am a full stack engineer with 6+ years work experience. With a
              background in Management, Economics, Computer Science and Data
              Science, I have a diverse set of knowledge that can be applied to
              many fields. I am especially interested in web design and
              development, user experience (UX) and user interface (UI) design,
              iOS development, as well as data analysis and visualization.
            </p>
            <br />
            <p>
              I received my Master's degree in Information Science from Cornell
              University with a focus on Human-Computer Interface (HCI) Design.
              I am incredibly curious about applying my knowledge to construct
              interfaces that improve the user experience. I am well-versed in
              the design, build and test process and have taken many projects
              from initial sketch to production, either as a mobile app or
              full-fledged web application.
            </p>
          </div>
          <div className="col-md-5">
            <div className="profile-img">
              <StaticImage
                className="img-circle"
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                src="../images/bg/me.jpg"
                width={200}
                height={200}
                quality={95}
                alt="Profile picture"
              />
            </div>
            <ul className="info-list">
              <li>
                <strong>Name : </strong>Yuanyuan (Maggie) Li
              </li>
              <li>
                <strong>Address : </strong>Jersey City, NJ
              </li>
              <li>
                <strong>Email : </strong>yuanyuanli2022@gmail.com
              </li>
              <li>
                <strong>Phone : </strong>+1 551-208-9392
              </li>
              <li>
                <strong>Skype : </strong>maggieli.love
              </li>
              <li>
                <strong>Interest : </strong> Full Stack Engineer, Frontend
                Engineer, Software Engineer, Product Engineer, Web Developer,
                UI/UX Developer
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="block-content ">
        <h3 className="block-title">Experience</h3>
        <div className="timeline experience">
          <div className="row ">
            <div className="col-md-12">
              <div className="exp-holder">
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Software Engineer (Venn)
                      <span className="work-place"> @ Two Sigma </span>{" "}
                    </h4>
                    <h5>
                      July 2018 - <span className="current">Current</span>
                    </h5>
                  </div>
                  <ul>
                    <li>
                      Leading a six-person group to build clients facing
                      features end to end. Front-end development in ReactJS,
                      Typescript, AngularJS and others. Back-end development in
                      Java using AWS cloud
                    </li>
                    <li>
                      Responsible for converting ambiguous goals to realistic
                      milestones, sprint planning & quarterly planning,
                      designing architecture, code reviewing and also mentoring
                      junior engineers
                    </li>
                    <li>
                      Partnering closely with product managers, designers,
                      sales, marketing and other stakeholders to drive
                      decision-making
                    </li>
                    <li>
                      Led reliability thread (3 - 4 engineers) to improve the
                      unit testing coverage for frontend from 5% to 70%+, built
                      automatic end to end testing framework from scratch
                      (Cypress) that reduced release testing time significantly,
                      built data quality engine and dashboard, and documented
                      code guidelines, release/support processes and etc
                    </li>
                    <li>
                      Introduced frontend best practices to the team such as
                      keyboard accessibility, browser error monitoring,
                      performance improvement, responsive css framework, and etc
                    </li>
                    <li>
                      Proposing new features with prototypes all the time,
                      rapidly iterated on them and got buy-in to launch such as
                      admin portal, visualizing users data and customized
                      reports
                    </li>
                    <li>
                      Contributing to Two Sigma frontend community by teaching
                      React class, hosting frontend/ux meetup and volunteering
                      to improve others teams UI projects
                    </li>
                  </ul>
                </div>

                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Front End Engineer{" "}
                      <span className="work-place">
                        {" "}
                        @ Jet.com (Acquired by Walmart)
                      </span>{" "}
                    </h4>
                    <h5>Jan 2017 - Jul 2018</h5>
                  </div>
                  <ul>
                    <li>
                      Leader of a five-person group charged with rebuilding
                      order history flow with React & Redux. Responsible for
                      planning, scoping and improving team's workflow each Agile
                      sprint.{" "}
                    </li>
                    <li>
                      Architected flexible analytics library to help a team of
                      business analysts track customer behavior.
                    </li>
                    <li>
                      Maintain features include customer checkout, search
                      suggestions, and promotions. Work with the full toolkit of
                      the front-end stack including pug (jade), Stylus and
                      express.js (for development) and Cucumber, Mocha and
                      WebdriverIO (for testing).
                    </li>
                    <li>
                      Collaborating with product designers, product managers,
                      marketing analytics, and API engineers to deliver
                      features.
                    </li>
                    <li>
                      Led a cross-function team won the top prize at Jet's
                      internal hackathon (Jet Innovation Time). The idea has
                      been developed into a new product line at Jet.
                    </li>
                    <li>
                      Independently developed front-end load testing suite in C#
                      for load-testing peak holiday demand. Worked with business
                      analysts, DevOps and other upstream teams to scale the
                      order system to be able to handle 3x the expected business
                      goal.
                    </li>
                    <li>
                      Experienced in front-end accessibility, cross-browser
                      compatibility, search engine optimization (SEO), and web
                      performance optimization.
                    </li>
                    <li>
                      Served on pager duty for the team troubleshooting
                      real-time production issues. The system supports hundreds
                      of thousands of monthly transactions.
                    </li>
                    <li>Jet meetup presenter</li>
                  </ul>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Web Developer{" "}
                      <span className="work-place"> @ SupplyHouse.com </span>{" "}
                    </h4>
                    <h5>Aug 2016 - Jan 2017</h5>
                  </div>
                  <ul>
                    <li>
                      Developed fully functional and responsive websites for
                      e-commerce built with Java (along with FreeMarker),
                      JavaScript, HTML5, CSS3, jQuery, and Bootstrap.{" "}
                    </li>
                    <li>
                      Created code & design guidelines shaping feedback from
                      graphic designers, marketers and software engineers.
                    </li>
                    <li>
                      Designed prototypes based on business requirements and
                      then translated prototypes into clean launch-ready pages
                      with reusable user interface (UI) components.
                    </li>
                    <li>
                      Tested front-end code in multiple browsers to ensure
                      cross-browser compatibility.
                    </li>
                    <li>
                      Managed set of websites using PHP, MySQL, and WordPress.
                    </li>
                  </ul>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Full Stack Developer{" "}
                      <span className="work-place">
                        {" "}
                        @ Yumso Inc (Startup Co-founder)
                      </span>
                    </h4>
                    <h5>May 2016 - July 2018</h5>
                  </div>
                  <ul>
                    <li>
                      Maintained, developed and designed our startup platform
                      enabling users to connect with local chefs with AngularJS,
                      D3.js, and Sass.
                    </li>
                    <li>
                      Executed and contributed to full-stack web development
                      with an emphasis on front-end features and cross-browser
                      compatibility.
                    </li>
                    <li>
                      Collaborated with a virtual and cross-functional team
                      using agile development methodology.
                    </li>
                  </ul>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Project Assistant
                      <span className="work-place"> @ PwC</span>
                    </h4>
                    <h5>March 2015 - July 2015</h5>
                  </div>
                  <ul>
                    <li>
                      Analyzed migration requirements for a legacy system
                      hand-in-hand with the client.
                    </li>
                    <li>
                      Developed and tested IT system specifications and
                      maintained project documentation.
                    </li>
                  </ul>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Project Assistant
                      <span className="work-place"> @ SAP</span>
                    </h4>
                    <h5>March 2015 - July 2015</h5>
                  </div>
                  <ul>
                    <li>
                      Analyzed clients’ requirements and improved customers’
                      satisfaction by redesigning processes.
                    </li>
                    <li>
                      Cooperated with global IT architects to finish 20+ reports
                      on SAP ERP integration, HANA in-memory immigration and
                      systems landscape optimism (SLO).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-content">
        <h3 className="block-title">Education</h3>
        <div className="timeline education">
          <div className="row ">
            <div className="col-md-12">
              <div className="exp-holder">
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Cornell University{" "}
                      <span className="work-place">, Ithaca, NY</span>
                    </h4>
                    <h4>
                      Master of Professional Studies in Information Science
                    </h4>
                    <h5>Aug 2015 - May 2016</h5>
                  </div>
                  <ul>
                    <li>GPA: 3.73/4.0</li>
                    <li>
                      Main courses: Database System, Software Engineer, Visual
                      Data Analytics for Web, Designing Data Product, OOP and
                      Data Structure, Human Computer Interaction Design
                    </li>
                  </ul>
                </div>

                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      University of International Business and Economics{" "}
                      <span className="work-place">, Beijing</span>
                    </h4>
                    <h4>Master of Economics</h4>
                    <h5>Sep 2015 - July 2016</h5>
                  </div>
                  <ul>
                    <li>GPA: 3.71/4.0</li>
                    <li>
                      Main courses: Advanced Economics, System Analysis and
                      Design, Economics Data Analysis, Research Methods,
                      Technology and Finance, and Internatinal Business
                    </li>
                  </ul>
                </div>

                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      University of International Business and Economics{" "}
                      <span className="work-place">, Beijing</span>
                    </h4>
                    <h4>Master of Economics</h4>
                    <h5>Sep 2010 - July 2014</h5>
                  </div>
                  <ul>
                    <li>GPA: 3.86/4.0, rank 1/108</li>
                    <li>
                      Main courses: Electronic Business, Finance Banking,
                      Micro-Economics, Macro-Economics, Web Development,
                      Statistics and Accounting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-content">
        <h3 className="block-title">Awards</h3>
        <div className="timeline education">
          <div className="row">
            <div className="col-md-12">
              <div className="exp-holder">
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      Guanghua Scholarship (top 5%), First-class Scholarship
                      (top 5%)
                    </h4>
                    <h5>2015</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Beijing Outstanding Graduate </h4>
                    <h5>2014</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Scholarship for Academic Performance (4/8,000+) </h4>
                    <h5>2013</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Leadership Scholarship (6 /8,000+) </h4>
                    <h5>2013</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>National Scholarship (top 1%) </h4>
                    <h5>2012</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>Beijing Merit Student (top 1%) </h4>
                    <h5>2012</h5>
                  </div>
                </div>
                <div className="exp">
                  <div className="hgroup">
                    <h4>
                      1st Prize and also awarded as “The Best Entrepreneurship”
                      in National E-Business Planning Competition
                    </h4>
                    <h5>2011</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-content">
        <div className="row text-center">
          <div className="col-md-12 btn-email">
            <a className="btn lowercase" href="mailto:yuanyuanli2022@gmail.com">
              yuanyuanli2022@gmail.com
            </a>
            <br />
            <small>
              Feel free to contact me for any interesting projects and jobs
            </small>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Profile
