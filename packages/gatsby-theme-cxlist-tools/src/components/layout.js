import React from 'react'
import { Styled } from 'theme-ui'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => (
  <Styled.root>
    <Global
      styles={css`
        html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%
        }
        html, body {
          height: 100%
        }
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
        }
        a {
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: all .2s ease 0s
        }
        a:active, a:hover {
          outline-width: 0
        }
        body {
          margin: 0
        }
      `}
    />
    {children}
  </Styled.root>
)

export default Layout
