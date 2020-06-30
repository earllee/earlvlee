import React from "react";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import { SocialIcon } from "react-social-icons";
import { Link } from "gatsby";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About Earl Lee</title>
    </Helmet>
    <img
      src="/reflection-in-mirror.jpg"
      alt="Reflection in mirror of Earl Lee"
    />
    <p className="latest-post-container">
      I started a newsletter called <OutboundLink href="http://personops.com">PersonOps</OutboundLink>!
    </p>
    <h3>Hi, my name is Earl Lee</h3>
    <p>
      I'm an MS/MBA student at{" "}
      <OutboundLink href="http://www.hbs.edu/ms-mba" className="bold">
        Harvard Business School
      </OutboundLink>{" "}
      and the{" "}
      <OutboundLink href="https://www.seas.harvard.edu/" className="bold">
        School of Engineering and Applied Sciences
      </OutboundLink>
      . Before school, I was an investment fellow at{' '}
      <OutboundLink href="http://www.costanoavc.com" className="bold">
        Costanoa Ventures
      </OutboundLink>
      , a Seed & Series A venture capital firm focused on enterprise software.
    </p>
    <p>
      Previously, I helped build{" "}
      <OutboundLink href="https://fiscalnote.com" className="bold">
        FiscalNote
      </OutboundLink>
      , a B2B SaaS company that helps organizations ranging from Fortune 500
      companies to nonprofits manage regulatory changes using
      data and machine learning. I joined pre-seed as the 3rd employee and
      helped us grow to Series D and 400+ employees, serving as a software
      engineer for my first two years and product manager during the last three. I wrote code for our MVP, helped build out our product team,
      established our internal analytics function, and by the end, led a
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

    <h3>Currently</h3>
    <p>Building something new, reading books, sharpening design skills, and coding more. Some recent hacks I've worked on:</p>
    <ul>
      <li><strong>Fitness aggregator:</strong> Scrapes data from various sources including MyFitnessPal and Withings to provide a holistic view on my health. It aggregates all the health metrics I track including sleep, nutrition, heart rate variability, resting heart rate, calories burned, and more. Feel free to reach out to me if you're interested in using this code.</li>
      <li><OutboundLink href="https://github.com/earllee/website-monitor" className="bold">Website monitor:</OutboundLink> Monitors a website every minute and text messages the user when something comes back in stock. I built this because I'm building a home gym and need to monitor niche e-commerce websites but didn't want to pay for high frequency monitoring and also wanted the immediacy of a text notification as opposed to email. On test runs, I was able to go from receipt of SMS to purchase in {'<15'} seconds!</li>
    </ul>
    <p>
      I also maintain {' '}
      <OutboundLink href="https://retaino.com" className="bold">
        Retaino
      </OutboundLink>
      , a way to overcome the mindless consumption of content driven by ads and
      algorithms and, instead, focus on learning and retaining useful knowledge
      across the web using spaced repetition.
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
