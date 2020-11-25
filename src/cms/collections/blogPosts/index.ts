import { CmsCollection, CmsField } from "netlify-cms-core"
import metadataField from "../../schemas/metadataField"
import slugField from "../../schemas/slugField"
import templateKeyField from "../../schemas/templateKeyField"
import pageTitleField from "../../schemas/pageTitleField"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Post", value: "blog/post" }],
    default: ["blog/post"],
  },
  slugField,
  pageTitleField,
  {
    label: "Blog Category",
    name: "blogCategory",
    widget: "relation",
    collection: "blogCategory",
    value_field: "slug",
    search_fields: ["title", "slug"],
    display_fields: ["title"],
  },
  { label: "Body", name: "body", widget: "markdown" },
  metadataField,
]

const collection: CmsCollection = {
  label: "Blog Posts",
  name: "blogPosts",
  folder: "content/pages/blog/posts",
  create: true,
  slug: "{{slug}}",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img",
  public_folder: "../../../static/img",
  fields,
}

export default collection
