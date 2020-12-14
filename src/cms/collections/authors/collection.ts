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
    widget: "select",
    options: [{ label: "Authors", value: "authors" }],
    default: ["authors"],
  },
  slugField,
  pageTitleField,
  { label: "Body", name: "body", widget: "markdown" },
  metadataObject,
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
  media_folder: "../../static/img/authors",
  public_folder: "/img/authors",
  fields,
}

export default collection
