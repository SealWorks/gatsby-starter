import { CmsCollection } from "netlify-cms-core"
import home from "./files/home"

const collection: CmsCollection = {
  label: "Pages",
  name: "pages",
  extension: "mdx",
  format: "frontmatter",
  summary: "{{fields.title}}: {{fields.slug}} ",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [home],
}

export default collection
