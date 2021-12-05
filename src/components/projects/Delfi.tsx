import * as React from "react"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Financial Technology</h2>
          <p className="tags">Finance Hackathon</p>
        </div>
        <p className="project-description">
          Presented a financial techonology solution in 24 hours and proposed a
          risk evaluation platform for Indian banks who could lend money to
          farmers but without data support
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Business Analysist
          </p>
          <p>
            <b>Skills utilized:</b> presentation, communication, and agile
            innovation
          </p>
        </div>
        <div className="project-wrapper">
          <p>
            I studied the finance problems in India and proposed sollutions and
            pitched to mentors and other groups' members to polish ideas. It's
            important to team with students from different background and
            learned agile innovation, problem analysis and conflict resollution.
          </p>
          <div className="seeDemo">
            <a
              href="https://drive.google.com/file/d/0B1wc14ChQmZVN0UwdFMteFYtLU0/view"
              className="btn btn-xl"
              target="_blank"
            >
              See Slide
            </a>
          </div>
          <iframe
            src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=E__kv34f1IM&lcode=&resourceId=110457139_06_05_99"
            allowTransparency
            allowFullScreen
            scrolling="no"
            frameBorder="0"
            style={{ width: "480px", height: "400px" }}
          ></iframe>
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> October 2015
          </li>
          <li>
            <b>Team members:</b>Anusha Jain, Ariana Haidari, Long Ma, Victor
            Fei, Yuanyuan Li
          </li>
        </ul>
      </div>
    </section>
  </div>
)
