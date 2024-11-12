import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { css } from "@emotion/core";
import { StaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Earl Lee is a tech entrepreneur and investor. He founded HeadsUp ($8.3M raised), invested at Costanoa Ventures, and was the 3rd hire at FiscalNote (NYSE: NOTE)."
          />
          <title>Earl Lee</title>
          <link rel="canonical" href="https://earlvlee.com/" />
        </Helmet>

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
        <div
          css={css`
            float: right;
          `}
        >
          <Link
            to={`/`}
            css={css`
              padding-right: 1em;
            `}
          >
            About
          </Link>
          <Link to={`/blog`}
            css={css`
              padding-right: 1em;
            `}
          >
            Blog</Link>
          <Link to={`/lists`}>Lists</Link>
        </div>
        {children}
      </div>
    )}
  />
);
