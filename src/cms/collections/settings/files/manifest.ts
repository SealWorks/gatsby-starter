import { CmsCollectionFile } from "netlify-cms-core"

const manifestCollectionFile: CmsCollectionFile = {
  file: "content/settings/manifest.json",
  label: "Manifest",
  name: "manifest",
  fields: [
    { label: "Name", name: "name", widget: "string" },
    { label: "Short Name", name: "short_name", widget: "string" },
    { label: "Start URL", name: "start_url", widget: "string" },
    {
      label: "Background Color",
      name: "background_color",
      widget: "color",
    },
    { label: "Theme Color", name: "theme_color", widget: "color" },
    {
      label: "Orientation",
      name: "orientation",
      widget: "select",
      options: [
        { label: "Portrait", value: "portrait" },
        { label: "Landscape", value: "landscape" },
      ],
      default: ["portrait"],
    },
    {
      label: "Display",
      name: "display",
      widget: "select",
      options: ["standalone"],
      default: ["standalone"],
    },
    {
      label: "Icon",
      name: "icon",
      widget: "image",
      media_library: {
        name: "github",
      },
    },
  ],
}

export default manifestCollectionFile
