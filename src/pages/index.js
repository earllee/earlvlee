import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About Earl</title>
    </Helmet>
    <div class="cover-image">
      <img
        src="../reflection-in-mirror-1.jpg"
        alt="Reflection of Earl Lee and Sarah in mirror"
      />
      <img
        src="../reflection-in-mirror-2.jpg"
        alt="Reflection of Earl Lee and Sarah in mirror"
      />
    </div>
    <p>
      Hi, my name is Earl Lee. I'm a product manager at{" "}
      <OutboundLink
        target="_blank"
        href="https://fiscalnote.com"
        rel="noopener noreferrer"
      >
        FiscalNote
      </OutboundLink>
      , a B2B SaaS company that helps organizations ranging from Fortune 500
      companies to nonprofits affect change in government by using data and
      machine learning. I joined as the 3rd employee and helped us grow to 400+
      employees.
    </p>
    <p>
      Previously, I interned at{" "}
      <OutboundLink
        target="_blank"
        href="https://google.com"
        rel="noopener noreferrer"
      >
        Google
      </OutboundLink>{" "}
      as a software engineer and got my BS in Computer Science at{" "}
      <OutboundLink
        target="_blank"
        href="https://yale.edu"
        rel="noopener noreferrer"
      >
        Yale
      </OutboundLink>
      .
    </p>

    <h3>Side-Project</h3>
    <p>
      I'm currently working on{" "}
      <OutboundLink
        target="_blank"
        href="https://retaino.com"
        rel="noopener noreferrer"
      >
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
        target="_blank"
        href="https://instagram.com/earllifts"
        rel="noopener noreferrer"
      >
        weightlifter
      </OutboundLink>{" "}
      and{" "}
      <OutboundLink
        target="_blank"
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
