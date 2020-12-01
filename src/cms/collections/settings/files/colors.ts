import { CmsCollectionFile } from "netlify-cms-core"

const collectionFile: CmsCollectionFile = {
  file: "content/settings/colors.json",
  label: "Palette Colors",
  label_singular: "Palette Color",
  name: "colors",
  fields: [
    {
      label: "Colors",
      name: "colors",
      widget: "list",
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        {
          label: "Color",
          name: "color",
          widget: "color",
        },
      ],
    },
  ],
}

export default collectionFile
