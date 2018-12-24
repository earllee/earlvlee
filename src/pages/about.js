import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About Earl</title>
    </Helmet>
    <p>My name is Earl. This is my website. Find me on:</p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/earlvlee"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/earlvlee"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/earlvlee"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://facebook.com/earlvlee"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/earllee"
        >
          Github
        </a>
      </li>
    </ul>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
