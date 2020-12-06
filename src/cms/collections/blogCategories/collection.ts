import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/components/metadataObject"
import slugField from "../../schemas/fields/slugField"
import templateKeyField from "../../schemas/fields/templateKeyField"
import pageTitleField from "../../schemas/fields/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Categories", value: "blog/category" }],
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
  folder: "content/blog/category",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img/blog",
  public_folder: "/img/blog",
  fields,
}

export default collection
