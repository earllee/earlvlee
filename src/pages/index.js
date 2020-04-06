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
    <p className="latest-post-container">
      Read my latest blog post{" "}
      <a href="/covid-19-podcast-arthur-brooks-len-schlesinger">here</a>!
    </p>
    <p>
      Hi, my name is Earl Lee. I'm an MS/MBA student at{" "}
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
      . On the side, I consult for{" "}
      <OutboundLink
        target="_blank"
        href="http://www.costanoavc.com"
        rel="noopener noreferrer"
      >
        Costanoa Ventures
      </OutboundLink>
      , where I was an early-stage B2B investment fellow before starting at HBS.
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
      companies to nonprofits manage change in government policy by using data
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

    <h3>Side-Project</h3>
    <p>Currently working on exploring ideas in the fitness space.</p>
    <p>
      My latest side project is{" "}
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

    <h3>Interests</h3>
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
