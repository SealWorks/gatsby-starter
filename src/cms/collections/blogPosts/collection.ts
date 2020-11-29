import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/metadataField"
import slugField from "../../schemas/slugField"
import templateKeyField from "../../schemas/templateKeyField"
import pageTitleField from "../../schemas/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Posts", value: "blog/post" }],
    default: ["blog/post"],
  },
  slugField,
  pageTitleField,
  metadataField,
]

const collection: CmsCollection = {
  label: "Blog Posts",
  label_singular: "Blog Post",
  name: "blogPost",
  create: true,
  folder: "content/pages/blog/post",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img",
  public_folder: "../../../static/img",
  fields,
}

export default collection
