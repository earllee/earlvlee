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
      I'm currently working on a new startup. Recently, I was an MS/MBA candidate at{" "}
      <OutboundLink href="http://www.hbs.edu/ms-mba" className="bold">
        Harvard Business School
      </OutboundLink>{" "}
      but left after completing my first year to found a company. I also invested at{" "}
      <OutboundLink href="http://www.costanoavc.com" className="bold">
        Costanoa Ventures
      </OutboundLink>
      , a Seed & Series A venture capital firm focused on enterprise software.
    </p>

    <p>
      I spent 6 years helping build{" "}
      <OutboundLink href="https://fiscalnote.com" className="bold">
        FiscalNote
      </OutboundLink>
      , a B2B SaaS company that helps organizations ranging from F500
      to nonprofits manage policy issues using data and machine learning.
      I joined pre-seed as the 3rd employee and helped us grow to Series D
      and 400+ employees, serving as a software engineer for 2 years and a product manager for 4 years.
      I wrote code for our MVP, owned design and implementation of several core features, helped build out our product team,
      established our internal analytics function, and, by the end, led a
      cross-functional R&D team of 15+ people shipping products across web, iOS, and Android.
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
