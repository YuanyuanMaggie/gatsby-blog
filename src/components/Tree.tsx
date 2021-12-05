import * as React from "react"
import {
  DecompositionTreeGraph,
  DecompositionTreeGraphConfig,
} from "@ant-design/charts"

const data = {
  id: "root",
  value: {
    title: "Web",
    items: [
      {
        text: "Full Stack",
      },
    ],
  },
  children: [
    {
      id: "frontend",
      value: {
        title: "Frontend",
        items: [
          {
            text: "UI/UX",
          },
        ],
      },
      children: [
        {
          id: "A11",
          value: {
            title: "Framework",
            items: [
              {
                text: "React/Typescript",
              },
              {
                text: "Angular+",
              },
            ],
          },
        },
        {
          id: "A12",
          value: {
            title: "CSS",
            items: [
              {
                text: "Styled-components",
              },
              {
                text: "Sass/Stylus",
              },
            ],
          },
        },
        {
          id: "A13",
          value: {
            title: "Testing",
            items: [
              {
                text: "Jest/react-testing-library",
              },
              {
                text: "Cypress",
              },
            ],
          },
        },
        {
          id: "A14",
          value: {
            title: "SSR",
            items: [
              {
                text: "NextJs",
              },
            ],
          },
        },
      ],
    },
    {
      id: "backend",
      value: {
        title: "Backend",
        items: [
          {
            text: "Server",
          },
        ],
      },
      children: [
        {
          id: "B11",
          value: {
            title: "API",
            items: [
              {
                text: "Dropwizard (Java)",
              },
              {
                text: "Flask (Python)",
              },
            ],
          },
        },
        {
          id: "B12",
          value: {
            title: "DB",
            items: [
              {
                text: "PostgresSQL",
              },
              {
                text: "MongoDB",
              },
            ],
          },
        },
        {
          id: "B13",
          value: {
            title: "Caching",
            items: [
              {
                text: "Redis",
              },
            ],
          },
        },
      ],
    },
    {
      id: "others",
      value: {
        title: "Operation",
        items: [
          {
            text: "CI/CD",
          },
          {
            text: "Package Manager",
          },
          {
            text: "AWS Cloud",
          },
        ],
      },
    },
  ],
}
const config = {
  data,
  behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
  nodeCfg: {
    title: {
      containerStyle: {
        fill: "transparent",
      },
      style: {
        fill: "#000",
      },
    },
    items: {
      text: "",
      containerStyle: {
        fill: "#fff",
      },
      style: (cfg, group, type) => {
        const styles = {
          icon: {
            width: 10,
            height: 10,
          },
          value: {
            fill: "#52c41a",
          },
          text: {
            fill: "#aaa",
          },
        }
        return styles[type]
      },
    },
    style: {
      stroke: "transparent",
    },
    nodeStateStyles: false,
  },
  edgeCfg: {
    endArrow: {
      show: false,
    },
    style: (item, graph) => {
      /**
       * graph.findById(item.target).getModel()
       * item.source: 获取 source 数据
       * item.target: 获取 target 数据
       */
      // console.log(graph.findById(item.source).getModel());
      return {
        stroke: "#f34452",
        lineWidth: Math.random() * 10 + 1,
        strokeOpacity: 0.5,
      }
    },
    edgeStateStyles: false,
  },
  markerCfg: {},
} as unknown as DecompositionTreeGraphConfig

const Tree = () => {
  return (
    <div className="block-content skillsTree">
      <h3 className="block-title">Skills Trees</h3>
      <div style={{ border: "1px solid #f1f1f2" }}>
        <DecompositionTreeGraph {...config} />
      </div>
    </div>
  )
}

export default Tree
