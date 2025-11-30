/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
const React = require("react")
const { wrapRootElement } = require("./src/wrap-root-element")

exports.wrapRootElement = wrapRootElement

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ko` })
}
