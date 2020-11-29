import CMS from "netlify-cms-app"
import { CmsConfig } from "netlify-cms-core"
import { collections, registerPreviews } from "./collections"
import { repository } from "../../package.json"
interface LocalCmsConfig extends CmsConfig {
  local_backend?: boolean | { url: string; allowed_hosts: string[] }
}

const config: LocalCmsConfig = {
  backend: {
    name: "github",
    branch: "dev",
    repo: repository.split("github.com/")[1].split(".git")[0],
  },
  display_url: window.location.origin,
  publish_mode: "editorial_workflow",
  media_folder: "static/img",
  media_folder_relative: true,
  public_folder: "/img",
  collections,
}

if (process.env.NODE_ENV === "development") {
  // config.local_backend = true
  config.local_backend = {
    url: "http://localhost:8081/api/v1",
    allowed_hosts: ["192.168.*.*"],
  }
}

CMS.init({ config })

registerPreviews()
