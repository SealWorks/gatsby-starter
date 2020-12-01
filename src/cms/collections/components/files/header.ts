import { CmsCollectionFile } from "netlify-cms-core"
import colorRelationField from "../../../schemas/colorRelationField"
import componentKeyField from "../../../schemas/componentKeyField"
import linkField from "../../../schemas/linkField"

const homePage: CmsCollectionFile = {
  file: "content/components/header.mdx",
  label: "Header",
  name: "header",
  fields: [
    { ...componentKeyField, options: ["header"], default: ["header"] },
    {
      label: "Logo",
      name: "logo",
      widget: "image",
    },
    {
      label: "Menu",
      name: "menu",
      widget: "list",
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
      label: "Design",
      name: "design",
      widget: "object",
      fields: [
        {
          ...colorRelationField,
          label: "Background Color",
          name: "bg",
        },
      ],
    },
  ],
}

export default homePage
