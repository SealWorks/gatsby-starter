import { extendTheme } from "@chakra-ui/react"
import colors from "../../../content/settings/colors.json"
import formatCMSColorsToChakra from "../../transformers/formatCMSColorsToChakra"

const theme = extendTheme({
  colors: formatCMSColorsToChakra(colors),
})

export default theme
