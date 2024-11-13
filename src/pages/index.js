import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import { SocialIcon } from "react-social-icons";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Earl Lee - the one in tech, not the conductor</title>
    </Helmet>
    <img
      src="/earl-in-japan.jpg"
      alt="Earl in Japan"
    />
    <h3>Hi, my name is Earl Lee</h3>
    <p>I build data infrastructure products at <OutboundLink href="https://hightouch.com">Hightouch</OutboundLink>. Previously, I founded <OutboundLink href="https://www.headsup.ai">HeadsUp</OutboundLink>, a software company that enabled other software companies to identify, nurture, and grow customers using insights from product analytics. I worked on that for three years, raising $8.3M in the process and scaling a team of 20 before exiting to Hightouch.</p>
    <p>Before that, I spent six years building <OutboundLink href="https://fiscalnote.com">FiscalNote</OutboundLink> (NYSE: NOTE). As employee #3, I helped the company grow to 150+ employees and $10M+ ARR, helped build the initial MVP as a software engineer, and iterated towards product-market fit and scale as a product manager. Most importantly, I founded the growth and analytics function there, inspiring me to start HeadsUp.</p>
    <p>While exploring what to build after FiscalNote, I spent time as an MS/MBA candidate at <OutboundLink href="https://www.hbs.edu/mba/academic-experience/joint-degree-programs/Pages/ms-mba-engineering-sciences.aspx">Harvard Business School</OutboundLink> and an investor at <OutboundLink href="https://costanoavc.com">Costanoa Ventures</OutboundLink>, where I worked on early-stage enterprise software deals.</p>
    <p>I'm a software engineer by training, having received my BS in Computer Science at <OutboundLink href="https://yale.edu/">Yale</OutboundLink> and interning at <OutboundLink href="https://www.google.com">Google</OutboundLink> as an undergrad.</p>

    <h3>Interests</h3>
    <p>
      I'm an avid{" "}
      <OutboundLink href="https://instagram.com/earllifts">
        weightlifter
      </OutboundLink>{", "}
      <OutboundLink href="https://www.strava.com/athletes/6698249">
        runner
      </OutboundLink>{", "}
      and{" "}
      <OutboundLink href="https://instagram.com/earlvlee">
        photographer
      </OutboundLink>
      . One of my favorite weekend activies is to post up at a coffee shop and
      read, think, and tinker. In the absence of a coffee shop, I like to make my
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
