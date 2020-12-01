import { CmsField } from "netlify-cms-core"

const colorRelationField: CmsField = {
  label: "Color",
  name: "color",
  widget: "relation",
  collection: "settings",
  file: "colors",
  value_field: "colors.*.color",
  display_fields: ["colors.*.color", "colors.*.label"],
  search_fields: ["colors.*.label"],
}

export default colorRelationField
