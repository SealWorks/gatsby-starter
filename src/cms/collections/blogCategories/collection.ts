import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Categories", value: "blog/category" }],
    default: ["blog/category"],
  },
  slugField,
  pageTitleField,
  metadataObject,
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
