import React from "react";
import Helmet from "react-helmet";
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
      <a href="https://fiscalnote.com" rel="noopener noreferrer">
        FiscalNote
      </a>
      . Previously, I interned at{" "}
      <a href="https://google.com" rel="noopener noreferrer">
        Google
      </a>{" "}
      as a <strong>software engineer</strong> and earned my Computer Science
      degree at{" "}
      <a href="https://yale.edu" rel="noopener noreferrer">
        Yale
      </a>
      .
    </p>

    <h3>Side-Project</h3>
    <p>
      I'm currently working on{" "}
      <a href="https://retaino.com" rel="noopener noreferrer">
        Retaino
      </a>
      , a way to overcome the mindless consumption of content driven by ads and
      algorithms and, instead, focus on learning and retaining useful knowledge
      using spaced repetition.
    </p>

    <h3>Hobbies</h3>
    <p>
      I am an avid{" "}
      <a href="https://instagram.com/earllifts" rel="noopener noreferrer">
        weightlifter
      </a>{" "}
      and{" "}
      <a href="https://instagram.com/earlvlee" rel="noopener noreferrer">
        photographer
      </a>
      .
    </p>

    <h3>Find me on</h3>
    <ul>
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
    </ul>
  </Layout>
);
