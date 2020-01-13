import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { createGlobalStyle } from "styled-components"

const theme = {
  black: "#222",
  offWhite: "#EDEDED",
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "light" ? theme : theme.black)};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: ${props => (props.theme === "light" ? theme.black : theme.offWhite)};
  }
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <GlobalStyle theme="light" />
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
            margin-right: 1em;
          `}
        >
          About
        </Link>
        <Link
          to={`/contact/`}
          css={css`
            float: right;
            margin-right: 1em;
          `}
        >
          Contact
        </Link>
        {children}
      </div>
    </>
  )
}
