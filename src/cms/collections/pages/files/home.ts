import { CmsCollectionFile } from "netlify-cms-core"
import cardsObject from "../../../schemas/components/cardsGroup"
import metadataObject from "../../../schemas/components/metadataObject"
import buttonFields from "../../../schemas/fields/buttonFields"
import buttonGroupField from "../../../schemas/components/buttonsGroup"
import linkField from "../../../schemas/fields/linkField"
import pageTitleField from "../../../schemas/fields/pageTitleField"
import slugField from "../../../schemas/fields/slugField"
import templateKeyField from "../../../schemas/fields/templateKeyField"
import buttonsGroup from "../../../schemas/components/buttonsGroup"

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
    {
      label: "Hero",
      name: "hero",
      widget: "object",
      fields: [
        { label: "Background Image", name: "bgImage", widget: "image" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Headline", name: "headline", widget: "string" },
        { ...buttonGroupField, fields: [...buttonFields, linkField] },
      ],
    },
    {
      label: "Call to action",
      name: "callToAction",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        cardsObject,
        buttonsGroup,
      ],
    },
    {
      label: "Description",
      name: "description",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        cardsObject,
      ],
    },
    {
      label: "Body (of Description)",
      name: "body",
      widget: "markdown",
    },
    metadataObject,
  ],
}

export default homePageCollection
