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
    <img
      src="../reflection-in-mirror.jpg"
      alt="Reflection in mirror of Earl Lee"
    />
    <h3>Hi, my name is Earl</h3>
    <p>
      I'm an MS/MBA student at{" "}
      <OutboundLink
        target="_blank"
        href="http://www.hbs.edu/ms-mba"
        rel="noopener noreferrer"
      >
        Harvard Business School
      </OutboundLink>{" "}
      and the{" "}
      <OutboundLink
        target="_blank"
        href="https://www.seas.harvard.edu/"
        rel="noopener noreferrer"
      >
        School of Engineering and Applied Sciences
      </OutboundLink>
      . Before school, I was an investment fellow at{' '}
      <OutboundLink
        target="_blank"
        href="http://www.costanoavc.com"
        rel="noopener noreferrer"
      >
        Costanoa Ventures
      </OutboundLink>
      , a Seed & Series A venture capital firm focused on enterprise software.
    </p>
    <p>
      Previously, I helped start{" "}
      <OutboundLink
        target="_blank"
        href="https://fiscalnote.com"
        rel="noopener noreferrer"
      >
        FiscalNote
      </OutboundLink>
      , a B2B SaaS company that helps organizations ranging from Fortune 500
      companies to nonprofits deal with change in government policy by using data
      and machine learning. I joined as the 3rd employee and helped us grow to
      400+ employees, serving as a software engineer for the first two years and
      product manager during the last three. By the end, I led a
      cross-functional R&D team of 15+ people working across web, iOS, and
      Android apps.
    </p>
    <p>
      During undergrad, I interned at{" "}
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

    <h3>Currently</h3>
    <p>I'm building something new and reading books. On the side, I
      work on{' '}
      <OutboundLink
        target="_blank"
        href="https://retaino.com"
        rel="noopener noreferrer"
      >
        Retaino
      </OutboundLink>
      , a way to overcome the mindless consumption of content driven by ads and
      algorithms and, instead, focus on learning and retaining useful knowledge
      across the web using spaced repetition.
    </p>

    <h3>Interests</h3>
    <p>
      I'm an avid{" "}
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
      . One of my favorite weekend activies is to post up at a coffee shop and
      read or write code. In the absence of a coffee shop, I like to make my
      own pourovers. Some of the online writers I like include Ben Thompson,
      Byrne Hobart, Matt Levine, Alex Danco, Nathan Baschez, and Eugene Wei.
    </p>

    <div className="social-icons-container">
      <SocialIcon
        url="https://twitter.com/earlvlee"
        bgColor="#444"
        className="social-icon"
      />
      <SocialIcon
        url="https://linkedin.com/in/earlvlee"
        bgColor="#444"
        className="social-icon"
      />
      <SocialIcon
        url="https://instagram.com/earlvlee"
        bgColor="#444"
        className="social-icon"
      />
      <SocialIcon
        url="https://github.com/earllee"
        bgColor="#444"
        className="social-icon"
      />
      <SocialIcon
        url="https://facebook.com/earlvlee"
        bgColor="#444"
        className="social-icon"
      />
    </div>
  </Layout>
);
