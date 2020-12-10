import { CmsField } from "netlify-cms-core"
import descriptionField from "../fields/descriptionField"
import iconField from "../fields/iconField"
import linkField from "../fields/linkField"

const cardsObject: CmsField = {
  label: "Cards",
  name: "cards",
  widget: "list",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    iconField,
    { label: "Text", name: "text", widget: "string", required: false },
    linkField,
  ],
}

export default cardsObject
