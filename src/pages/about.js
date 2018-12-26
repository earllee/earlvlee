import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About Earl</title>
    </Helmet>
    <img
      src="../reflection-in-mirror.jpg"
      alt="Reflection of Earl Lee and Sarah in mirror"
    />
    <p>
      Hi, my name is Earl Lee. I'm a <strong>product manager</strong> and{" "}
      <strong>earl-lee employee</strong> at{" "}
      <OutboundLink href="https://fiscalnote.com" rel="noopener noreferrer">
        FiscalNote
      </OutboundLink>
      . Previously, I interned at{" "}
      <OutboundLink href="https://google.com" rel="noopener noreferrer">
        Google
      </OutboundLink>{" "}
      as a <strong>software engineer</strong> and earned my Computer Science
      degree at{" "}
      <OutboundLink href="https://yale.edu" rel="noopener noreferrer">
        Yale
      </OutboundLink>
      .
    </p>

    <h3>Side-Project</h3>
    <p>
      I'm currently working on{" "}
      <OutboundLink href="https://retaino.com" rel="noopener noreferrer">
        Retaino
      </OutboundLink>
      , a way to overcome the mindless consumption of content driven by ads and
      algorithms and, instead, focus on learning and retaining useful knowledge
      using spaced repetition.
    </p>

    <h3>Hobbies</h3>
    <p>
      I am an avid{" "}
      <OutboundLink
        href="https://instagram.com/earllifts"
        rel="noopener noreferrer"
      >
        weightlifter
      </OutboundLink>{" "}
      and{" "}
      <OutboundLink
        href="https://instagram.com/earlvlee"
        rel="noopener noreferrer"
      >
        photographer
      </OutboundLink>
      .
    </p>

    <h3>Find me on</h3>
    <ul>
      <li>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://facebook.com/earlvlee"
        >
          Facebook
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/earllee"
        >
          Github
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/earlvlee"
        >
          Instagram
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/earlvlee"
        >
          LinkedIn
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/earlvlee"
        >
          Twitter
        </OutboundLink>
      </li>
    </ul>
  </Layout>
);
