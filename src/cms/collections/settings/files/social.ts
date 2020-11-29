import { CmsCollectionFile } from "netlify-cms-core"

const collectionFile: CmsCollectionFile = {
  file: "content/settings/social.json",
  label: "Social Network",
  name: "social",
  fields: [
    {
      label: "Social Networks",
      name: "socialNetworks",
      widget: "list",
      fields: [
        {
          label: "Name",
          name: "name",
          widget: "select",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Twitter", value: "twitter" },
            { label: "Youtube", value: "youtube" },
          ],
        },
        { label: "Link", name: "link", widget: "string" },
      ],
    },
  ],
}

export default collectionFile
