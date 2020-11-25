import { CmsCollectionFile } from "netlify-cms-core"

const homePage: CmsCollectionFile = {
  file: "content/settings/siteMetadata.json",
  label: "Button",
  name: "Button",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    { label: "body", name: "body", widget: "markdown" },
  ],
}

export default homePage
