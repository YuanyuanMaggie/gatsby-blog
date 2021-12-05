import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>iOS Design and Development</h2>
          <p className="tags">Cornell Feline Health Project</p>
        </div>
        <p className="project-description">
          Developed a mobile application for Cornell Feline Health Center to
          improve the health and well-being of cats
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> UI Designer and iOS Developer
          </p>
          <p>
            <b>Skills utilized:</b> programming on the iOS platform, UI design,
            and UX design
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Requirements</h4>
          <p>
            The Cornell Feline Health Center is dedicated to improving the
            health and well-being of cats everywhere by: (1) educating
            veterinary professionals, cat owners, breeders, and conservationists
            about feline health by providing timely medical information and by
            promoting public understanding and awareness of feline issues; (2)
            finding ways of preventing and curing diseases of cats by conducting
            and sponsoring breakthrough feline health studies; and (3) aiding
            veterinarians when new or unknown feline diseases occur.
          </p>
          <p className="textleft">
            FitCat Weight Loss is a four-step app with following steps: (1) plan
            the weight loss program, (2) help the owner shop for food to meet
            the plan, (3) record what the cat eats, and (4) track actual vs.
            planned weight loss. The goal of this project was to implement the
            planning step only. The planning step involves: (1) teaching the
            owner how to judge their cat’s body condition (a visual/tactile
            measure of the cat’s degree of obesity), (2) getting the actual body
            condition from the owner, (3) using the the cat’s actual weight and
            the recommended safe weight loss rate to project the goal weight,
            the time to reach the goal, and the maximum calories and grams of
            fat per day for the cat to achieve the goal in the given time.
          </p>
        </div>

        <div className="project-wrapper">
          <h4>Prototypes version 1 </h4>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/FitCat01-min.png"
            alt="FitCat"
          />
          <h4>Prototypes demo</h4>
          <iframe
            src="https://player.vimeo.com/video/162764417"
            width="250"
            height="445"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-wrapper">
          <h4>Prototypes version 2</h4>
          <p className="textleft">
            In the iterative prototpyes, we changed the UI design to make it
            consistent with the Cornell Feline Center brand.
          </p>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/FitCat02-min.png"
            alt="Fitcat"
          />
          <h4>Prototypes demo</h4>
          <h4>Sketch 3 pictures</h4>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/FitCat03-min.png"
            alt="Fitcat"
          />
          <hr />
          <h4>iOS Demo-Real App</h4>
          <iframe
            src="https://player.vimeo.com/video/162462556"
            width="500"
            height="281"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-wrapper">
          <h4>Presentation Poster</h4>
          <StaticImage
            className="img-responsive img-centered"
            src="../../images/projects/fitcat-poster-min.jpg"
            alt="poster"
          />
        </div>
        <div className="project-wrapper">
          <h4>Our Team</h4>
          <StaticImage
            className="img-responsive img-centered team-image"
            src="../../images/projects/fitcat-team-min.png"
            alt="team"
          />
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> Jan 2016 - May 2016
          </li>
          <li>
            <b>Clients:</b> Dr. Bruce Kornreich, College of Veterinary Medicine;
            Paul Cashman, Founder at History in Motion
          </li>
          <li>
            <b>Team members:</b> Yuanyuan Li (Maggie), Akshay Tata, Shunchang
            Bai
          </li>
        </ul>
      </div>
    </section>
  </div>
)
