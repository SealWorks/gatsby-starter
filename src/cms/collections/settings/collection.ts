import { CmsCollection } from "netlify-cms-core"
import manifestCollectionFile from "./files/manifest"
import publicKeysCollectionFile from "./files/publicKeys"
import siteMetadataCollectionFile from "./files/siteMetadata"
import socialCollectionFile from "./files/social"
import infoCollectionFile from "./files/info"

const collection: CmsCollection = {
  label: "Settings (!)",
  name: "settings",
  extension: "json",
  format: "json",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [
    socialCollectionFile,
    publicKeysCollectionFile,
    infoCollectionFile,
    manifestCollectionFile,
    siteMetadataCollectionFile,
  ],
}

export default collection
