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
    options: [{ label: "Faq Post", value: "faq/post" }],
    default: ["faq/post"],
  },
  slugField,
  pageTitleField,
  {
    label: "Categories",
    name: "categories",
    widget: "relation",
    multiple: true,
    collection: "faqCategory",
    search_fields: ["title", "text"],
    value_field: "slug",
    display_fields: ["title"],
  },
  bodyField,
  metadataObject,
]

const collection: CmsCollection = {
  label: "Faq Post",
  label_singular: "Faq Post",
  name: "faqPost",
  folder: "content/faq/post",
  create: true,
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img/faq",
  public_folder: "/img/faq",
  summary: "{{title}} -> /faq{{fields.slug}}",
  sortable_fields: ["title", "metadata.dateModified"],
  fields,
}

export default collection
