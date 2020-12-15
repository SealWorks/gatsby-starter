import CMS from "netlify-cms-app"

import { pagesCollection, pagesPreview } from "./collections/pages"
import { blogPostsCollection, blogPostsTemplate } from "./collections/blogPosts"
import {
  blogCategoriesCollection,
  blogCategoriesTemplate,
} from "./collections/blogCategories"
import { uiCollection } from "./collections/ui"
import {
  settingsCollection,
  settingsPreviewTemplate,
} from "./collections/settings"
import { authorsCollection } from "./collections/authors"
import withChakra from "./withChakra"
import {
  componentsCollection,
  componentsPreview,
} from "./collections/components"
import { faviconCollection } from "./collections/favicon"

export const collections = [
  pagesCollection,
  blogPostsCollection,
  blogCategoriesCollection,
  authorsCollection,
  componentsCollection,
  uiCollection,
  settingsCollection,
  faviconCollection,
]

export function registerPreviews() {
  // CMS.registerPreviewTemplate(pagesCollection.name, withChakra(pagesTemplate))
  CMS.registerPreviewTemplate("home", withChakra(pagesPreview.home))
  CMS.registerPreviewTemplate("about", withChakra(pagesPreview.about))
  CMS.registerPreviewTemplate("header", withChakra(componentsPreview.header))
  CMS.registerPreviewTemplate(
    "newsletter",
    withChakra(componentsPreview.newsletter)
  )
  CMS.registerPreviewTemplate("footer", withChakra(componentsPreview.footer))
  CMS.registerPreviewTemplate(blogPostsCollection.name, blogPostsTemplate)
  CMS.registerPreviewTemplate(
    blogCategoriesCollection.name,
    blogCategoriesTemplate
  )
  CMS.registerPreviewTemplate(
    "manifest",
    withChakra(settingsPreviewTemplate.manifest)
  )
  CMS.registerPreviewTemplate(
    "colors",
    withChakra(settingsPreviewTemplate.colors)
  )
}
