import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/metadataField"
import slugField from "../../schemas/slugField"
import templateKeyField from "../../schemas/templateKeyField"
import pageTitleField from "../../schemas/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Default", value: "default" }],
    default: ["default"],
  },
  slugField,
  pageTitleField,
  { label: "Body", name: "body", widget: "markdown" },
  metadataField,
]

const collection: CmsCollection = {
  label: "Pages",
  name: "pages",
  folder: "content/pages",
  create: true,
  slug: "{{slug}}",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img",
  public_folder: "../../static/img",
  fields,
}

export default collection
