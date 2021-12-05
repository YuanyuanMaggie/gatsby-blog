import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Designing Data Products with MBAs</h2>
          <p className="tags">Class project</p>
        </div>
        <p className="project-description">
          Learned to use Regression, KNN-cluster, Naive Bayes and Decision Tree
          to solve business problems and proposed a data product designing
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Developer, Data scientist
          </p>
          <p>
            <b>Skills utilized:</b> Data analysis and visualization,
            presentation
          </p>
        </div>
        <div className="project-wrapper">
          <div className="seeDemo">
            <a
              href="http://yuanyuanli.me/DataProductDesign/index.html"
              className="btn btn-xl"
              target="_blank"
            >
              See Demo
            </a>
          </div>
          <StaticImage
            src="../../images/portfolio/p8-dataproduct-min.png"
            className="img-responsive"
            alt="data product design"
          />
          <StaticImage
            src="../../images/projects/data-00-min.png"
            className="img-responsive"
            alt="data product design"
          />
          <StaticImage
            src="../../images/projects/data-001-min.png"
            className="img-responsive"
            alt="data product design"
          />
          <StaticImage
            src="../../images/projects/data-002-min.png"
            className="img-responsive"
            alt="data product design"
          />
          <StaticImage
            src="../../images/projects/data-01-min.png"
            className="img-responsive"
            alt="data product design"
          />
          <StaticImage
            src="../../images/projects/data-03-min.png"
            className="img-responsive"
            alt="data product design"
          />
        </div>
        <ul className="list-inline">
          <li>
            <b>Date:</b> March 2016 - April 2016
          </li>
          <li>
            <b>Team members:</b> Jack Zoephel，Tyler Done，Sowmya Ballakur，Ryan
            Armstrong, Yuanyuan Li
          </li>
        </ul>
      </div>
    </section>
  </div>
)
