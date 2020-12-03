import CMS from "netlify-cms-app"
import { CmsConfig } from "netlify-cms-core"
import { collections, registerPreviews } from "./collections"
import { repository } from "../../package.json"
import cloudinary from "netlify-cms-media-library-cloudinary"
import publicKeys from "../../content/settings/publicKeys.json"

const config = {
  backend: {
    name: "github",
    branch: "dev",
    repo: repository.split("github.com/")[1].split(".git")[0],
  },
  display_url: window.location.origin,
  publish_mode: "editorial_workflow",
  collections,
}

if (publicKeys.cloudinary) {
  config.media_library = {
    name: cloudinary,
    config: publicKeys.cloudinary,
    default_transformations: [
      [
        {
          width: 2000,
          quality: 80,
          crop: "limit",
        },
      ],
    ],
  }
} else {
  config = {
    ...config,
    media_folder: "static/img",
    media_folder_relative: true,
    public_folder: "/img",
  }
}

if (process.env.NODE_ENV === "development") {
  // config.local_backend = true
  config.local_backend = {
    url: "http://localhost:8081/api/v1",
    allowed_hosts: ["192.168.*.*"],
  }
}

CMS.init({ config })

if (publicKeys.cloudinary) {
  CMS.registerMediaLibrary(cloudinary)
}

registerPreviews()
