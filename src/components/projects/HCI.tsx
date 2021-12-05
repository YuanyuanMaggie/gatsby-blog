import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Human Computer Interface Design</h2>
          <p className="tags">Class project</p>
        </div>
        <p className="project-description">
          I the HCI class and project, I learned how hardware and software
          design influence the interaction between people and computers. We also
          finished the HCI Dietary Restrictions Assistive technology project
          successfully.
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> UI/UX Designer
          </p>
          <p>
            <b>Skills utilized:</b> user interviews and analysis, UI design
            (Adobe PhotoShop), low quality prototypes and high quality
            prototypes (Axure RP/ Sketch 3)
          </p>
        </div>
        <StaticImage
          className="img-responsive img-centered"
          src="../../images/projects/hci01-min.png"
          alt=""
        />
        <div className="project-wrapper">
          <h4>Problems</h4>
          <p>
            When arriving on a college campus for the first time, new students
            are forced to rapidly adapt to their new social and work environment
            over the course of their study. This task is daunting in its own
            right, but is made so much more difficult when the student’s diet is
            limited by a GI disease, severe allergy, or other dietary
            restriction. Students with these conditions may often put their
            health at risk when they don’t have the time or energy to ensure
            they are maintaining their diet, and may also feel socially limited
            when they are unable to eat at the same places as their friends.
          </p>
        </div>

        <div className="project-wrapper">
          <h4> Our solutions</h4>
          <p>
            To help Cornell students with diet restrictions, especially new
            students, we developed Cornell MenU: a mobile application designed
            to provide streamlined and filtered menu information about on-campus
            meal halls based on the user’s dietary restriction that will also
            serve to connect newer students with older students with similar
            conditions to create an information sharing network.
          </p>
          <h4>Paper prototypes</h4>
          <p>
            Our product is a mobile application which obviously meets the first
            goal that users need; an App format which is user friendly and
            convenient. We first used paper prototypes to test concepts and got
            quick feedback from target students.{" "}
          </p>
          <p>
            Low quality prototypes:{" "}
            <a href="https://invis.io/KJ504APR2" target="_blank">
              https://invis.io/KJ504APR2
            </a>
          </p>
          <h4>Low quality prototypes demo</h4>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/ODh2gFGO0VA"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h4>Hign Quality Prototypes</h4>
          <p>
            After individual and group heuristic evaluations on the paper
            prototypes, we built our high quality prototype by Photoshop and
            Axure RP.{" "}
          </p>

          <h5>Hign quality prototypes</h5>
          <iframe
            src="https://player.vimeo.com/video/162628656"
            width="500"
            height="281"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h5>Iterative Prototypes</h5>
          <p>
            High quality protopypes:{" "}
            <a href="http://51qjzm.axshare.com/#c=2 " target="_blank">
              http://51qjzm.axshare.com/#c=2
            </a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/162629322"
            width="500"
            height="281"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-wrapper">
          <h4>Our Poster</h4>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/hci2-min.png"
            alt="poster"
          />
        </div>
        <div className="project-wrapper">
          <h4>Our team</h4>
          <StaticImage
            className="img-reponsive img-centered team-image"
            src="../../images/portfolio/hciteam-min.jpg"
            alt="hciteam"
          />
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> May 2016 - May 2016
          </li>
          <li>
            <b>Team members:</b> Lan Zhang, Rocio Perez Cano and Yuanyuan Li
          </li>
        </ul>
      </div>
    </section>
  </div>
)
