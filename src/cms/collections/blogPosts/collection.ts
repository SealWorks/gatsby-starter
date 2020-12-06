import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/components/metadataObject"
import slugField from "../../schemas/fields/slugField"
import templateKeyField from "../../schemas/fields/templateKeyField"
import pageTitleField from "../../schemas/fields/pageTitleField"

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
  folder: "content/blog/",
  path: "{{year}}/{{slug}}",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img/blog",
  public_folder: "/img/blog",
  fields,
}

export default collection
