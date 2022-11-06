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
          <li>
            <OutboundLink href="https://benn.substack.com">
              Benn Stancil
            </OutboundLink> - Data ecosystem
          </li>
          <li>
            <OutboundLink href="https://newsletter.pragmaticengineer.com">
              The Pragmatic Engineer by Gergely Orosz
            </OutboundLink> - Inside pulse on SV software engineering
          </li>
          <li>
            <OutboundLink href="https://www.techmeme.com">
              TechMeme
            </OutboundLink> - Digest on all things tech
          </li>
          <li>
            <OutboundLink href="https://whoisnnamdi.com">
              Who Is Nnamdi by Nnamdi Iregbulem
            </OutboundLink> - Data-driven perspective on tech investing
          </li>
        </ul>

        <h3>Books</h3>
        <ul>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/4030991-shoe-dog">
              Shoe Dog by Phil Knight
            </OutboundLink> - Captures the essence of entrepreneurship
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
              Your Brain at Work by David Rock
            </OutboundLink> - Understand your thought process better
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/41795733-range">
              Range by David Epstein
            </OutboundLink> - Why being a jack of all trades helps excel in many domains 
          </li>
          <li>
            <OutboundLink href="https://www.goodreads.com/book/show/31869155-the-captain-class">
              The Captain Class by Sam Walker 
            </OutboundLink> - Unique take on what makes great vs. dynastic teams
          </li>
        </ul>

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
