import { CmsCollectionFile } from "netlify-cms-core"
import colorRelationField from "../../../schemas/fields/colorRelationField"
import componentKeyField from "../../../schemas/fields/componentKeyField"
import linkField from "../../../schemas/fields/linkField"

const homePageCollectionFile: CmsCollectionFile = {
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

export default homePageCollectionFile
