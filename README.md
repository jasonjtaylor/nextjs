The Next.js app was designed to walk through the basics of Next.js its folder structure, styling, SEO and data fetching.

The front end built with:

•	Next.js 
•	React 
•	Mongo DB 
•	Vercel

Installation


Clone this repository $ git clone https://github.com/jasonjtaylor/nextjs

Install dependencies $ npm install and mongo

Run the app $ npm run dev

Run the app in the development mode. Open http://localhost:3000 to view application in the browser.

Lessons learned


Don’t manually install. Use the install code from the Next.js documentation so the boiler plate folder structure is created it will save you time and headaches.

Styling was tricky at first since I have primarily use SASS but once I messed around with it and understood the module.css and global.css structure it started to get easier so stick with it.

The folder structure created when first building the app via npx-create-next is great. Only having to create your components folder and not having to worry about page routes was nice unlike when using React.

Data fetching was different for me than with traditional React. I typically would use Axios to get my data but with Next.js I used fetch() and it seemed to work just as well once I figured it out.

Moving forward, I will continue to use Next.js when building future projects. I am also considering going back on some previous React projects and implementing Next.js to optimize my sites.
