# Getting Started with Next.js

This is a starter project for React that uses Next.js. The Next.js app was designed to walk through the basics of Next.js its folder structure, styling, SEO and data fetching.

## About 

Next.js is a framework that makes it easy to create universal React apps and React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App. 

## Built with:

• Next.js
• React
• Mongo DB
• Vercel

## Running locally in development mode

To get started, just clone the repository and run npm install and npm run dev:

    git clone https://github.com/jasonjtaylor/nextjs
    npm install, npm install mongo
    npm run dev

## Building and deploying

To run this site in production you should install modules then build the site with npm run build and run it with `npm run dev`:

    npm install
    npm run build
    npm run dev
    
    Run the app in the development mode. Open http://localhost:3000 to view application in the browser.

## Database 

I used MongoDB Atlas cloud https://www.mongodb.com/cloud/atlas/ which has a free tier and other inexpensive options.

### Vercel GitHub integration

You can integrate with a GitHub account to trigger automated deployments anytime you push to GitHub. 

## Hosting

You can host your Next.js site with any hosting provider.I used Vercel but Digital Ocean works as well.


## Thoughts and Lessons learned

Don’t manually install. Use the install code from the Next.js documentation so the boiler plate folder structure is created it will save you time and headaches.

Styling was tricky at first since I have primarily use SASS but once I messed around with it and understood the module.css and global.css structure it started to get easier so stick with it.

The folder structure created when first building the app via npx-create-next is great. Only having to create your components folder and not having to worry about page routes was nice unlike when using React.

Data fetching was different for me than with traditional React. I typically would use Axios to get my data but with Next.js I used fetch() and it seemed to work just as well once I figured it out.

Moving forward, I will continue to use Next.js when building future projects. I am also considering going back on some previous React projects and implementing Next.js to optimize my sites.
