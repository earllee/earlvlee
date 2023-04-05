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
      src="/earl-in-rome.jpg"
      alt="Earl in Rome Italy"
    />
    <h3>Hi, my name is Earl Lee</h3>
    <p>I'm the CEO & Co-Founder of <OutboundLink href="https://www.headsup.ai">HeadsUp</OutboundLink>. We help product-led SaaS companies nurture and convert users by using data and machine learning to understand users' likelihood to pay and how they use a product. Our product then seamlessly provides this context for sales reps to act on so the business can drive higher conversion rates and net dollar retention. To learn more, read about us on <OutboundLink href="https://techcrunch.com/2022/09/28/headsup-helps-plg-sales-teams-understand-how-and-when-to-sell/">TechCrunch</OutboundLink>.</p>
    <p>Previously, I spent 6 years building <OutboundLink href="https://fiscalnote.com">FiscalNote</OutboundLink> (NYSE: NOTE). As employee #3, I helped the company grow to 150+ employees and $10M+ ARR, helped build the initial MVP as a software engineer, and iterated toward product-market fit and scale as a product manager. Most importantly, I founded the growth and analytics function there, inspiring me to start HeadsUp.</p>
    <p>While exploring what to build after FiscalNote, I spent time as an MS/MBA candidate at <OutboundLink href="https://www.hbs.edu/mba/academic-experience/joint-degree-programs/Pages/ms-mba-engineering-sciences.aspx">Harvard Business School</OutboundLink> and a fellow at <OutboundLink href="https://costanoavc.com">Costanoa Ventures</OutboundLink>, where I worked on deals across a wide range of Seed, Series A, and even follow-on Series B B2B SaaS investments.</p>
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
