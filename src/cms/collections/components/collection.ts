import { CmsCollection } from "netlify-cms-core"
import button from "./files/header"

const collection: CmsCollection = {
  label: "Components",
  name: "components",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img",
  public_folder: "../../static/img",
  files: [button],
}

export default collection
