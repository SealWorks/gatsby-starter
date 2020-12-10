import { CmsCollectionFile } from "netlify-cms-core"
import descriptionField from "../../../schemas/fields/descriptionField"
import metadataField from "../../../schemas/components/metadataObject"
import urlField from "../../../schemas/fields/urlField"

const siteMetadataCollectionFile: CmsCollectionFile = {
  file: "content/settings/siteMetadata.json",
  label: "Site Metadata",
  name: "siteMetadata",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { ...urlField, label: "Canonical Url", name: "siteUrl" },
    {
      ...descriptionField,
      label: "Default Description",

      pattern: [
        ".{20,255}",
        "Must have at least 20 characters and not more than 255",
      ],
    },
    { label: "Main Language", name: "lang", widget: "string" },
    { label: "Logo", name: "logo", widget: "image" },
    {
      label: "Logo Alternative",
      name: "logoAlt",
      widget: "image",
    },
    {
      label: "Default Image on Share",
      name: "thumbnail",
      widget: "image",
    },
    {
      label: "Default Publisher",
      name: "publisher",
      widget: "string",
    },
    {
      label: "Default Author",
      name: "author",
      widget: "string",
    },
  ],
}

export default siteMetadataCollectionFile
