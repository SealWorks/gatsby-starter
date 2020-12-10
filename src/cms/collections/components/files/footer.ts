import { CmsCollectionFile } from "netlify-cms-core"
import componentKeyField from "../../../schemas/fields/componentKeyField"
import linkField from "../../../schemas/fields/linkField"
import iconField from "../../../schemas/fields/iconField"

const footerCollectionFile: CmsCollectionFile = {
  file: "content/components/footer.mdx",
  label: "Footer",
  name: "Footer",
  fields: [
    { ...componentKeyField, options: ["footer"], default: ["footer"] },
    {
      ...iconField,
      label: "Logo",
      name: "logo",
    },
    {
      label: "Links Lists",
      name: "linksLists",
      widget: "list",
      min: 2,
      max: 2,
      fields: [
        { label: "Title", name: "title" },
        {
          label: "Links List",
          name: "linksList",
          widget: "list",
          max: 7,
          fields: [{ label: "Label", name: "label" }, linkField],
        },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

export default footerCollectionFile
