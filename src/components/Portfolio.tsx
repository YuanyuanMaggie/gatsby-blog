import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { keyBy } from "lodash"
import Img from "gatsby-image"
import Jet from "./projects/Jet"
import Supply from "./projects/Supply"
import Yumso from "./projects/Yumso"
import D3 from "./projects/D3"
import HCI from "./projects/HCI"
import SDE from "./projects/Se"
import FitCat from "./projects/FitCat"
import Rapid from "./projects/Rapid"
import NonProfit from "./projects/NonProfit"
import GiveNext from "./projects/GiveNext"
import Cscw from "./projects/Cscw"
import DataProduct from "./projects/Dataproduct"
import Modal from "./Modal"
import Venn from "./projects/Venn"

const projects = [
  {
    header: "Two Sigma",
    subHeader: "Web Development",
    key: "two-sigma-venn.png",
    alt: "Two Sigma",
    tags: ["work"],
    component: <Venn />,
  },
  {
    header: "Jet.com (Walmart)",
    subHeader: "Web Development",
    key: "jet.jpeg",
    alt: "jet",
    tags: ["work", "hackathon"],
    component: <Jet />,
  },
  {
    header: "SupplyHouse.com",
    subHeader: "Web Development",
    key: "supplyhouse.png",
    alt: "supplyhouse",
    tags: ["work"],
    component: <Supply />,
  },
  {
    header: "Yumso Inc (Side Project)",
    subHeader: "Web Development",
    key: "yumso-min.png",
    alt: "yumso",
    tags: ["work"],
    component: <Yumso />,
  },
  {
    header: "Data-Driven Web Application (D3.js)",
    subHeader: "Data Visualization",
    key: "p7-d3-min.png",
    alt: "data driven",
    tags: ["small"],
    component: <D3 />,
  },
  {
    header: "Human Computer Interface Design Project",
    subHeader: "UI/UX Design",
    key: "p2-hci-min.png",
    alt: "hci",
    tags: ["small"],
    component: <HCI />,
  },
  {
    header: "Software Engineering Clients Project",
    subHeader: "Web Development",
    key: "p1-se-min.png",
    alt: "software engineering",
    tags: ["small"],
    component: <SDE />,
  },
  {
    header: "Cornell Feline Health Center Project",
    subHeader: "iOS Development",
    key: "p5-fitcat-min.png",
    alt: "fitcat",
    tags: ["small"],
    component: <FitCat />,
  },
  {
    header: "Donation Startup Business Solution",
    subHeader: "UI/UX Design",
    key: "p6-givenext-min.png",
    alt: "givenext",
    tags: ["small"],
    component: <GiveNext />,
  },
  {
    header: "Computer Supported Collaboration Research",
    subHeader: "UX Research",
    key: "p3-cscw-min.png",
    alt: "cscw",
    tags: ["small"],
    component: <Cscw />,
  },
  {
    header: "Designing A Data Product",
    subHeader: "Data Analysis and Visualization",
    key: "p8-dataproduct-min.png",
    alt: "data product",
    tags: ["small"],
    component: <DataProduct />,
  },
  {
    header: "Rapid Prototyping and Physical Computing",
    subHeader: "UI/UX Design",
    key: "p4-rapid-min.png",
    alt: "rapid prototyping",
    tags: ["small"],
    component: <Rapid />,
  },
  {
    header: "Non-profit Business Solution",
    subHeader: "Web Development",
    key: "p9-nonprofit-min.png",
    alt: "non profit",
    tags: ["small"],
    component: <NonProfit />,
  },
]

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioImage {
      allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const imageMap = keyBy(
    data?.allFile?.edges.map(i => i.node),
    "base"
  )
  const [project, setProject] = React.useState<JSX.Element>(null)

  return (
    <>
      <div className="content-blocks portfolio">
        <section className="content">
          <div className="block-content">
            <h3 className="block-title">Portfolio</h3>
            <div className="row">
              <div className="col-md-12">
                <ul id="filters">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".work">Work Experience</li>
                  <li data-filter=".hackathon">Hackathon</li>
                  <li data-filter=".school">Small Projects</li>
                </ul>
                <div id="projects">
                  {projects.map(project => (
                    <div className="project" key={project.key}>
                      <a
                        className="open-project"
                        onClick={() => setProject(project.component)}
                      >
                        <div className="project-overlay">
                          <div className="vcenter">
                            <div className="centrize">
                              <h4>{project.header}</h4>
                              <p>{project.subHeader}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <Img
                        fluid={imageMap[project.key]?.childImageSharp?.fluid}
                        alt={project.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-12">
                <h4>Interested in me?</h4>
                <a className="btn lowercase">yuanyuanli2022@gmail.com</a>
                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
      {project && <Modal onClose={() => setProject(null)}>{project}</Modal>}
    </>
  )
}

export default Portfolio
