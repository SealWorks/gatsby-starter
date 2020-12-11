import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Template } from "../../../../templates/pages/home"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const thisData = entry.getIn(["data"]).toJS()
  const data = {
    ...thisData,
    description: {
      ...thisData.description,
      body: thisData.body,
    },
  }

  if (isLoadingAsset || !data) {
    return <div>Loading ...</div>
  } else {
    return <Template data={data} />
  }
}

export default PreviewTemplate
