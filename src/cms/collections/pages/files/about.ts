import { CmsCollectionFile } from "netlify-cms-core"
import {
  bodyField,
  cardsGroup,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../../schemas"

const aboutPageCollection: CmsCollectionFile = {
  file: "content/pages/about.mdx",
  label: "Quem Somos",
  name: "about",
  fields: [
    {
      ...templateKeyField,
      options: [{ label: "About", value: "pages/about" }],
      default: ["pages/about"],
    },
    slugField,
    pageTitleField,
    bodyField,
    metadataObject,
  ],
}

export default aboutPageCollection
