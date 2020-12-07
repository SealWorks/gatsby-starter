import { CmsCollectionFile } from "netlify-cms-core"
import metadataObject from "../../../schemas/components/metadataObject"
import pageTitleField from "../../../schemas/fields/pageTitleField"
import slugField from "../../../schemas/fields/slugField"
import templateKeyField from "../../../schemas/fields/templateKeyField"

const homePageCollection: CmsCollectionFile = {
  file: "content/pages/index.mdx",
  label: "Home",
  name: "home",
  fields: [
    {
      ...templateKeyField,
      options: [{ label: "Home Pge", value: "pages/home" }],
      default: ["pages/home"],
    },
    { ...slugField, pattern: ["/", "Home page must be '/' only"] },
    pageTitleField,
    { label: "Body", name: "body", widget: "markdown" },
    metadataObject,
  ],
}

export default homePageCollection
