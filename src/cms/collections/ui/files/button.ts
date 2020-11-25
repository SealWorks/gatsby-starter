import { CmsCollectionFile } from "netlify-cms-core"

const homePage: CmsCollectionFile = {
  file: "content/ui/button.mdx",
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
