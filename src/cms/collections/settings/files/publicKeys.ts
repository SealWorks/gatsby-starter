import { CmsCollectionFile } from "netlify-cms-core"

const collectionFile: CmsCollectionFile = {
  file: "content/settings/publicKeys.json",
  label: "Public Keys",
  name: "publicKeys",
  fields: [
    {
      label: "Google gTag",
      name: "gtag",
      required: false,
    },
    {
      label: "tawk.to",
      name: "tawkto",
      required: false,
    },
    {
      label: "Cloudinary",
      name: "cloudinary",
      widget: "object",
      required: false,
      fields: [
        { label: "Cloud Name", name: "cloud_name" },
        { label: "API Key", name: "api_key" },
      ],
    },
  ],
}

export default collectionFile
