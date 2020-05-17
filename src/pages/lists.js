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
        {/* <img src="portrero-hill.jpg" alt="Portrero Hill" /> */}
        {/* <img src="vietnamese-country-side.jpg" alt="Vietnamese country side" /> */}
        {/* <img src="avalon-beach.jpg" alt="Avalon Beach" /> */}
        {/* <img src="bamboo-trees.jpg" alt="Bamboo trees" /> */}
        {/* <img src="half-dome.jpg" alt="Half Dome Yosemite Skyline" /> */}
        <img
          src="la-belle-epoque.jpg"
          alt="La Belle Epoque restaurant in Paris"
        />
        {/* <img src="les-invalides.jpg" alt="Les Invalides in Paris" /> */}
        {/* <img src="oculus.jpg" alt="Oculus in New York" /> */}
        {/* <img src="paris-at-sunset.jpg" alt="Paris skyline at sunset" /> */}
        {/* <img src="paris-skyline-during-day.jpg" alt="Paris skyline during day" /> */}
        {/* <img src="reflection-in-mirror.jpg" alt="Reflection of Earl Lee and Sarah in the mirror" /> */}
        <p><em>Lists of things I think are interesting and worth sharing.</em></p>
        <h3>Newsletters</h3>
        <p>I think editorialized newsletters are a great way to learn. They
        take you inside the minds of sharp thinkers and how they process new
          information. These are some of the ones I regularly read.</p>
        <ul>
          <li>
            <OutboundLink href="https://stratechery.com">
              Stratechery by Ben Thompson
            </OutboundLink> - Tech strategy
          </li>
          <li>
            <OutboundLink href="https://diff.substack.com">
              The Diff by Byrne Hobart
            </OutboundLink> - Strategy and finance
          </li>
          <li>
            <OutboundLink href="https://venturedesktop.substack.com">
              Venture Desktop by Brett Bivens
            </OutboundLink> - Tech
          </li>
          <li>
            <OutboundLink href="http://firehose.substack.com">
              Drinking from the Firehose by Alex Taussig
            </OutboundLink> - Startups, VC
          </li>
          <li>
            <OutboundLink href="http://link.mail.bloombergbusiness.com/join/4wm/moneystuff-signup">
              Money Stuff by Matt Levine
            </OutboundLink> - Finance
          </li>
          <li>
            <OutboundLink href="http://eugenewei.substack.com">
              Remains of the Day by Eugene Wei
            </OutboundLink> - Tech, business, product, and culture
          </li>
          <li>
            <OutboundLink href="https://alexdanco.com">
              Alex Danco
            </OutboundLink> - Tech and finance
          </li>
          <li>
            <OutboundLink href="https://divinations.substack.com">
              Divinations by Nathan Baschez
            </OutboundLink> - Strategy
          </li>
          <li>
            <OutboundLink href="https://www.ben-evans.com/newsletter">
              Benedict Evans
            </OutboundLink> - Tech, VC
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
            <OutboundLink href="https://www.goodreads.com/book/show/22535480-elon-musk">
              Elon Musk by Ashlee Vance
            </OutboundLink> - Story of insane grit and shooting for the moon (literally)
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
            Other book recommendation lists
            <ul>
              <li>
                <em>I haven't read most of the books in these lists, but the books
                listed seem interesting. I'd love to get to them some day. I put
          them here as a constant reminder of how much there is to learn.</em>
              </li>
              <li>
                <OutboundLink href="https://ig.ft.com/sites/business-book-award/">
                  Financial Times
              </OutboundLink> - Best Business Books
            </li>
              <li>
                <OutboundLink href="https://medium.com/the-mission/39-book-recommendations-from-billionaire-charlie-munger-that-will-make-you-smarter-72efcbeaec77">
                  Charlie Munger
              </OutboundLink> - Book Recommendations
            </li>
              <li>
                <OutboundLink href="http://investorfieldguide.com/the-best-per-page-books/">
                  Patrick O'Shaughnessy
              </OutboundLink> - Best Per-Page Books
            </li>
              <li>
                <OutboundLink href="https://medium.com/@gavin_baker/investing-book-list-5fba1b80728d">
                  Gavin Baker
              </OutboundLink> - Book recommendations for investing
            </li>
              <li>
                <OutboundLink href="https://www.goodbooks.io/?ref=producthunt">
                  GoodBooks.io
              </OutboundLink> - Compilation of book recommendations from interesting people
            </li>

            </ul>
          </li>

        </ul>
      </div>
    </Layout>
  );
};
