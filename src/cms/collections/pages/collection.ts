import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/components/metadataObject"
import slugField from "../../schemas/fields/slugField"
import templateKeyField from "../../schemas/fields/templateKeyField"
import pageTitleField from "../../schemas/fields/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    widget: "select",
    options: [
      { label: "Default", value: "pages/default" },
      { label: "Home Page", value: "pages/home" },
    ],
    default: ["pages/default"],
  },
  slugField,
  pageTitleField,
  { label: "Body", name: "body", widget: "markdown" },
  metadataField,
]

const collection: CmsCollection = {
  label: "Pages",
  label_singular: "Page",
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
