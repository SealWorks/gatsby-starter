import { CmsCollection } from "netlify-cms-core"
import siteMetadata from "./files/siteMetadata"

const collection: CmsCollection = {
  label: "Settings (!)",
  name: "settings",
  extension: "json",
  format: "json",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [siteMetadata],
}

export default collection
