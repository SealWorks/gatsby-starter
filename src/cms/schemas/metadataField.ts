import { CmsField } from "netlify-cms-core"

const metadataField: CmsField = {
  label: "SEO",
  name: "seo",
  widget: "object",
  fields: [
    { name: "templateKey", widget: "hidden", default: "home" },
    {
      label: "Title",
      name: "title",
      widget: "string",
      hint: "to long titles will be truncate at search engines",
      required: false,
    },
    {
      label: "Description",
      name: "description",
      widget: "string",
      pattern: [
        ".{10,255}",
        "Must have at least 10 characters and what exceeds 155 will be hidden (max 255)",
      ],
      required: false,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Updated Date",
      name: "dateModified",
      widget: "datetime",
    },
    {
      label: "Published Date",
      name: "datePublished",
      widget: "datetime",
    },
  ],
}

export default metadataField
