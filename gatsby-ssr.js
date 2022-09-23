import React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' })
  setHeadComponents([
    <link key={0} rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key={1}
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      key={0}
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700|Open+Sans:300,400,400i,600,700,800"
    />,
  ])
}
