import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Earl's Lists</title>
      </Helmet>
      <div>
        <img
          src="/la-belle-epoque.jpg"
          alt="La Belle Epoque restaurant in Paris"
        />
        <p><em>Lists of things I think are interesting and worth sharing.</em></p>
        <h3>Newsletters</h3>
        <p>I think editorialized newsletters are a great way to learn. They
          take you inside the minds of sharp thinkers and how they process new
          information. These are some of the ones I regularly read.</p>
        <ul>
          <li>
            <OutboundLink href="https://diff.substack.com">
              The Diff by Byrne Hobart
            </OutboundLink> - Strategy and finance
          </li>
          <li>
            <OutboundLink href="https://whatshot.substack.com/">
              What's Hot in Enterprise IT/VC by Ed Sim
            </OutboundLink> - Enterprise software
          </li>
          <li>
            <OutboundLink href="https://stratechery.com">
              Stratechery by Ben Thompson
            </OutboundLink> - Tech strategy
          </li>
        </ul>

        <h3>Books</h3>
        <ul>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/4030991-shoe-dog">
              Shoe Dog by Phil Knight
            </OutboundLink> - Incredible entrepreneurship story
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/16144575-how-asia-works">
              How Asia Works by Joe Studwell
            </OutboundLink> - Development economics of East Asian countries
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/13530973-antifragile">
              Antifragile by Nassim Nicholas Taleb
            </OutboundLink> - Thinking about systems
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/13586932-the-outsiders">
              The Outsiders by William Thorndike
            </OutboundLink> - Capitalist's perspective on great CEO's
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/22535480-elon-musk">
              Elon Musk by Ashlee Vance
            </OutboundLink> - Story of insane grit and shooting for the moon (literally)
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/22535480-elon-musk">
              Your Brain at Work by David Rock
            </OutboundLink> - Meta read that helps you understand your thought process
          </li>
        </ul>
        <p>For more book recommendations or to follow what I read, add me on <OutboundLink href="https://www.goodreads.com/user/show/46024849-earl-lee">Goodreads</OutboundLink>!</p>

        <h3>Videos</h3>
        <ul>
          <li>
            <OutboundLink href="https://www.netflix.com/title/80203144">
              The Last Dance (2020)
            </OutboundLink> - Michael Jordan and the 1990s championship Bulls team
          </li>
        </ul>

      </div>
    </Layout>
  );
};
