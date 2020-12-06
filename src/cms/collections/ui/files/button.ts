import { CmsCollectionFile } from "netlify-cms-core"
import colorRelationField from "../../../schemas/fields/colorRelationField"
import iconField from "../../../schemas/fields/iconField"

const buttonCollectionFile: CmsCollectionFile = {
  file: "content/ui/button.mdx",
  label: "Button",
  name: "button",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    colorRelationField,
    { label: "body", name: "body", widget: "markdown" },
    iconField,
  ],
}

export default buttonCollectionFile
