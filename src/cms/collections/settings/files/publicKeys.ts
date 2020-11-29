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
  ],
}

export default collectionFile
