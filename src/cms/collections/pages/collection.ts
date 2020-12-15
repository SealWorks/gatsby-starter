import { CmsCollection } from "netlify-cms-core"
import home from "./files/home"
import about from "./files/about"

const collection: CmsCollection = {
  label: "Pages",
  name: "pages",
  extension: "mdx",
  format: "frontmatter",
  summary: "{{title | upper}} --- {{fields.slug}} ",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [home, about],
}

export default collection
