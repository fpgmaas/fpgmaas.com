import "@fontsource/inter" 
import "@fontsource/inter/300.css"
import "@fontsource/fira-code"
import "@fontsource/fira-code/400.css"

// Fix huge icon flash: https://github.com/FortAwesome/react-fontawesome/issues/234
const styles = require("@fortawesome/fontawesome-svg-core/styles.css")
const config = require("@fortawesome/fontawesome-svg-core")
config.autoAddCss = false