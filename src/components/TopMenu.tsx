import { Link } from "gatsby"
import * as React from "react"

export type SectionType = "PROFILE" | "PORTFOLIO" | "BLOG" | "SKILLS" | "NONE"

interface Item {
  label: string
  class: string
  sectionType: SectionType
}

export const menuItems: Item[] = [
  {
    label: "Profile",
    class: "about",
    sectionType: "PROFILE",
  },
  {
    label: "Portfolio",
    class: "portfolio",
    sectionType: "PORTFOLIO",
  },
  {
    label: "Blog",
    class: "blog",
    sectionType: "BLOG",
  },
  {
    label: "Skills",
    class: "contact",
    sectionType: "SKILLS",
  },
]

const TopMenu = ({
  sectionType,
  defaultUrl,
}: {
  sectionType?: SectionType
  defaultUrl?: string
}) => {
  return (
    <div className="inline-menu-container">
      <ul className="inline-menu">
        {defaultUrl
          ? null
          : menuItems.map(item => (
              <li
                key={item.label}
                className={`${item.class} menu-item ${
                  sectionType === item.sectionType ? "active" : ""
                }`}
              >
                <Link to={`/?section=${item.sectionType}`}>{item.label}</Link>
              </li>
            ))}
        <li>
          <Link to={defaultUrl ?? "/"}>
            {defaultUrl ? "Close " : ""}&times;
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default TopMenu
