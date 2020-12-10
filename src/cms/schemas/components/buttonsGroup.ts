import { CmsField } from "netlify-cms-core"
import buttonFields from "../fields/buttonFields"

const buttonsGroup: CmsField = {
  label: "Buttons",
  name: "buttons",
  widget: "list",
  fields: buttonFields,
}

export default buttonsGroup
