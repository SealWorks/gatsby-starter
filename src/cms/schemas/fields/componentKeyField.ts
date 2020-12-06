import { CmsField } from "netlify-cms-core"

const templateKeyField: CmsField = {
  label: "Component Key",
  name: "componentKey",
  widget: "select",
  options: [{ label: "None", value: "none" }],
  default: ["none"],
}

export default templateKeyField
