
# Movie Memory App 

## Description
This app is an implementation of the classic memory card game. It fetches data from the open TheMovieDB API and comes with some additional features. Not only can you select the total number of cards you want to play with, you can also match different properties like movie poster, title and year of release, thus allowing 9 different combinations.

## Why I built this app
Developing this project helped me immensely in learning to handle data structures and state management. It is also in this project that I gave tailwind css a first try. 

## Tech Stack
- Javascript ES6
- ReactJS
- NextJS
- Tailwind CSS

## How to install and run the project

1) Clone the project, running git **clone https://github.com/Larence0401/Movie-Memory-Quiz.git**

2) Install dependencies running **npm i** in your terminal

3) Register on **https://www.themoviedb.org/settings/api** in order to get a free API key for the movie database assigned.

4) create a file named **.env.local** in the project's root folder and assign your *themoviedb* API key the the environment variable: **API_KEY=[API Key]**

## How to use the project

If you are planning to use the project with a different API, 

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
