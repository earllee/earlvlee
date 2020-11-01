import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import { SocialIcon } from "react-social-icons";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About Earl Lee</title>
    </Helmet>
    <img
      src="/earl-at-matthews-arm.jpg"
      alt="Earl at Matthew's Arm"
    />
    <h3>Hi, my name is Earl Lee</h3>
    <p>
      Recently, I was an MS/MBA candidate at{" "}
      <OutboundLink href="http://www.hbs.edu/ms-mba" className="bold">
        Harvard Business School
      </OutboundLink>{" "}
      and an investor at{" "}
      <OutboundLink href="http://www.costanoavc.com" className="bold">
        Costanoa Ventures
      </OutboundLink>
      , a Seed & Series A venture capital firm focused on enterprise software.
    </p>

    <p>
      I spent 6 years helping build B2B SaaS company{" "}
      <OutboundLink href="https://fiscalnote.com" className="bold">
        FiscalNote
      </OutboundLink>
     , where I joined as the 3rd employee and helped us grow to 150+ employees and $10M+ ARR. I was a software engineer for 2 years and a product manager for 4 years,
      writing code for our MVP, owning design and implementation of core features, and leading our data analytics function. By the end, I led a
      cross-functional R&D team of 15+ people shipping product across web, iOS, and Android. Our product helps organizations ranging from F500 to nonprofits manage policy issues using data and machine learning.

    </p>
    <p>
      During undergrad, I interned at{" "}
      <OutboundLink href="https://google.com" className="bold">
        Google
      </OutboundLink>{" "}
      as a software engineer and got my BS in Computer Science at{" "}
      <OutboundLink href="https://yale.edu" className="bold">
        Yale
      </OutboundLink>
      .
    </p>

    <h3>Interests</h3>
    <p>
      I'm an avid{" "}
      <OutboundLink href="https://instagram.com/earllifts" className="bold">
        weightlifter
      </OutboundLink>{" "}
      and{" "}
      <OutboundLink href="https://instagram.com/earlvlee" className="bold">
        photographer
      </OutboundLink>
      . One of my favorite weekend activies is to post up at a coffee shop and
      read or write code. In the absence of a coffee shop, I like to make my
      own pourovers.
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
