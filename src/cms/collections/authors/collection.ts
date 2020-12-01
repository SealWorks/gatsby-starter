import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/metadataObject"
import slugField from "../../schemas/slugField"
import templateKeyField from "../../schemas/templateKeyField"
import pageTitleField from "../../schemas/pageTitleField"

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
  label: "Authors",
  label_singular: "Author",
  name: "authors",
  folder: "content/authors",
  create: true,
  slug: "{{slug}}",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img",
  public_folder: "../../static/img",
  fields,
}

export default collection
