import { CmsCollectionFile } from "netlify-cms-core"
import googleFontsOptions from "./googleFontsOptions.json"

const collectionFile: CmsCollectionFile = {
  file: "content/settings/googleFonts.json",
  label: "Google Fonts",
  label_singular: "Google Font",
  name: "googleFonts",
  fields: [
    {
      label: "Google Fonts",
      name: "googleFonts",
      widget: "list",
      fields: [
        {
          label: "Google Font",
          name: "googleFont",
          widget: "object",
          fields: [
            {
              label: "Reference Name (label)",
              name: "label",
              widget: "string",
            },
            {
              label: "Family",
              name: "family",
              widget: "select",
              options: googleFontsOptions,
            },
            {
              label: "Variants",
              name: "variants",
              widget: "select",
              multiple: true,
              options: ["100", "200", "300", "400", "500", "600", "700", "900"],
            },
          ],
        },
      ],
    },
  ],
}

export default collectionFile
