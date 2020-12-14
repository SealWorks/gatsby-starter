import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  bodyField,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Posts", value: "blog/post" }],
    default: ["blog/post"],
  },
  slugField,
  pageTitleField,
  bodyField,
  metadataObject,
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
