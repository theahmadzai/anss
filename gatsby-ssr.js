import React from 'react'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'

const cache = createCache()

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  const style = extractStyle(cache, true)

  setHtmlAttributes({ lang: 'en' })
  setHeadComponents([
    <link key={0} rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key={1} rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />,
    <link
      key={2}
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&display=swap"
    />,
    <style key={3} dangerouslySetInnerHTML={{ __html: style }}></style>,
  ])
}

export const wrapRootElement = ({ element }) => {
  return <StyleProvider cache={cache}>{element}</StyleProvider>
}
