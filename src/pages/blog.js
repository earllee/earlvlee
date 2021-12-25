import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Earl Lee's Blog</title>
      </Helmet>
      <div>
        <img src="/portrero-hill.jpg" alt="Portrero Hill" />
        {/* <img src="vietnamese-country-side.jpg" alt="Vietnamese country side" /> */}
        {/* <img src="avalon-beach.jpg" alt="Avalon Beach" /> */}
        {/* <img src="bamboo-trees.jpg" alt="Bamboo trees" /> */}
        {/* <img src="half-dome.jpg" alt="Half Dome Yosemite Skyline" /> */}
        {/* <img
          src="la-belle-epoque.jpg"
          alt="La Belle Epoque restaurant in Paris"
        /> */}
        {/* <img src="les-invalides.jpg" alt="Les Invalides in Paris" /> */}
        {/* <img src="oculus.jpg" alt="Oculus in New York" /> */}
        {/* <img src="paris-at-sunset.jpg" alt="Paris skyline at sunset" /> */}
        {/* <img src="paris-skyline-during-day.jpg" alt="Paris skyline during day" /> */}
        {/* <img src="reflection-in-mirror.jpg" alt="Reflection of Earl Lee and Sarah in the mirror" /> */}
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
