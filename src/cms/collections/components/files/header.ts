import { CmsCollectionFile } from "netlify-cms-core"
import componentKeyField from "../../../schemas/fields/componentKeyField"
import linkField from "../../../schemas/fields/linkField"
import iconField from "../../../schemas/fields/iconField"
import buttonGroupField from "../../../schemas/components/buttonsGroup"

const headerCollectionFile: CmsCollectionFile = {
  file: "content/components/header.mdx",
  label: "Header",
  name: "header",
  fields: [
    { ...componentKeyField, options: ["header"], default: ["header"] },
    {
      ...iconField,
      label: "Logo",
      name: "logo",
    },
    {
      label: "Menu",
      name: "menu",
      widget: "list",
      max: 10,
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        linkField,
      ],
    },
    {
      ...buttonGroupField,
      max: 2,

    },
  ],
}

export default headerCollectionFile
