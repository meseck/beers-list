# `🍺 Beers List for Piloteers 🛩️`

## `Task:`

Use the database from BreweryDB('brewerydb.com') and prepare two simple screens.

Screens:
1. List of all beers including name, abv, ibu, then after a click on one list item you get to a second screen.
2. Show more informations about the selected beer including: name, abv, ibu, isOrganic, labels, year, status and related glass data.

## `Documentation:`

Since the API does not support CORS, I had to set up an Express server which acts as a proxy to the beer database. Then I could use the server itself as a proxy for React. After that I was able to use React to display the information in the database without any problems. My last step was to use the AbortController to cancel the last request if the buttons for changing a page was pressed several times. I used create-react-app and Reactstrap to speed up the build process of the prototype.

## `Run the Project`
> 1. 'npm install' or 'yarn'
> 2. 'npm dev' or 'yarn dev'
> 3. open http://localhost:3000/

> To test the project use 'npm test' or 'yarn test'.