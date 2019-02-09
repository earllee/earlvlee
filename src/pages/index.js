import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import { SocialIcon } from "react-social-icons";

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
    <p>
      This fall, I'll be starting as an MS Engineering/MBA student at{" "}
      <OutboundLink
        target="_blank"
        href="http://www.hbs.edu/ms-mba"
        rel="noopener noreferrer"
      >
        Harvard
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

    <div class="social-icons-container">
      <SocialIcon
        url="https://twitter.com/earlvlee"
        bgColor="#444"
        class="social-icon"
      />
      <SocialIcon
        url="https://linkedin.com/in/earlvlee"
        bgColor="#444"
        class="social-icon"
      />
      <SocialIcon
        url="https://instagram.com/earlvlee"
        bgColor="#444"
        class="social-icon"
      />
      <SocialIcon
        url="https://github.com/earllee"
        bgColor="#444"
        class="social-icon"
      />
      <SocialIcon
        url="https://facebook.com/earlvlee"
        bgColor="#444"
        class="social-icon"
      />
    </div>
  </Layout>
);
