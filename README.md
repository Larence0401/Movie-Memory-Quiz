
# Movie Memory App 


![ezgif com-gif-maker-3](https://user-images.githubusercontent.com/86207164/146981393-f47b0574-5265-402f-8f94-436c95e7d0fd.gif)


&nbsp;
## Description!

This app is an implementation of the classic memory card game. It fetches data from the open TheMovieDB API and comes with some additional features. Not only can you select the total number of cards you want to play with, you can also match different properties like movie poster, title and year of release, thus allowing 9 different combinations. 

## Why I built this app
Developing this project helped me immensely in learning to handle data structures and state management. It is also in this project that I gave tailwind css a first try. 

## Tech Stack
- Javascript ES6
- ReactJS
- NextJS
- Tailwind CSS

## Features
- either 12 or 18 cards can be selected for the game
- 3 different properties can be selected for each half of a pair of cards (movie poster, year of release, title)
- mobile layout with toggle menu
- sound effect on mouse click
- sound effect when game has finished
- modal showing up when game starts and ends
- app fetches data from a random page of the *themoviedb* API out of 10 pages in total upon each reload
- app randomly shuffles a dataset of movies

## How to install and run the project

1) Clone the project, running git **clone https://github.com/Larence0401/Movie-Memory-Quiz.git**

2) Install dependencies running **npm i** in your terminal

3) Register on **https://www.themoviedb.org/settings/api** in order to get a free API key for the movie database assigned.

4) create a file named **.env.local** in the project's root folder and assign your *themoviedb* API key the the environment variable: **API_KEY=[API key]**

## How to use the project

If you are planning to use the project with a different API, you can do so by adjusting the helper functions *getData.js* and *randomizeSample.js* in the utils folder, by changing the key-value pairs in the settings state  in index.js, and by tweaking the JSX attributes in the Menu Component.
The 2 functions *getData.js* and *randomizeSample.js* are involved in hydrating the app. getData.js fetches a dataset from the external API and returns a promise. getData.js initializes the state of movieData, which is an array of objects.
*randomizeSample.js* takes 2 parameters throuh a helper function, which are the number of cards in a game and the highest index in the array of objects returned by *getData.js*.
*randomizeSample.js* then randomly determines, based on those 2 parameters, the subset of movies being retrieved from the dataset returned by *getData.js*. It then duplicates that subset, shuffles it and initializes the state of tileData. It is then the *tileData* array which is mapped through in the *Tiles* component. Each iterator of *tileData* is an object with 3 key-value-pairs (index of movie object in *movieData*, the partition each card belongs to and a boolean indicating whether a card is flipped or not) being passed down as props to each instance of the *Tile* component.  

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
