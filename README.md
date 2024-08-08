# Portfolio Site V4 - Comin' Back for More

## Why the redesign?

I suppose this is actually V3 ish.

My first site was incredibly boring and inititally built with CRA. Eventually I decided to rebuild it on Next.js, so it got a back-end overhaul but kept largely the same design.

Second time around, I swung too far in the other direction. It definitely wasn't boring but it was also overly complex and overall, just not great.

## What are the goals for V4?

Well the main one is to strike a balance between "might as well be a PDF" and "holy animations, Batman".

Other than that, I want to expand a little more. Write up case studies on some of the projects, leave room for a blog, etc.

It's also my first time using TypeScript, Tailwind, and some components from Shadcn. Figured I've been wanting to start experimenting with different ways of doing things and this was a good excuse.

<hr>

## What are the goals post launch?

I'm launching within the next few days and while the site is in a good state, there are definitely a few things I want to do going forwards.

- Clean up my code
    - abstract common Tailwind styling to variables
    - condence all of my mobile checks to a single hook
    - just generally fix spacing and indenting to make it *pretty*
- Add more comments because Lord knows I **will** forget what I did and why
- Add more breakpoints
    - right now it looks good on mobile, good on desktop, and is hit or miss with everything in between
    - mainly it's the stuff with the carousels. most of my other sections adapt well as is
- Add a blog section
    - Right now my WordPress install is essentially just file storage. I want to change that. A blog template with a blogs landing page and content from WordPress via WPGraphQL sounds like a great way to do that.
- Add more work examples
    - I'm wrapping up some projects soon so this should be easy but still - more work would be great