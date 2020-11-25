import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/metadataField"
import slugField from "../../schemas/slugField"
import templateKeyField from "../../schemas/templateKeyField"
import pageTitleField from "../../schemas/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Category", value: "blog/category" }],
    default: ["blog/category"],
  },
  slugField,
  pageTitleField,
  metadataField,
]

const collection: CmsCollection = {
  label: "Blog Categories",
  label_singular: "Blog Category",
  name: "blogCategory",
  folder: "content/pages/blog/category",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img",
  public_folder: "../../../static/img",
  fields,
}

export default collection
