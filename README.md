### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### TODO:
- Better error handling on requests.
- Infinite scroll using new css attribute (introduced recently), forgot what it was called.
- Unit test component props, input validation cases, success / error cases on request with mock data.
- Save favourite shows feature
  - Save id / name to localStorage
  - Favourites tab in searchBar component
  - Fetch on click, navigate to ShowDetails
- Enum type for genres.
- SearchBar
  - If only one match, navigate to showDetails page.
  - If no results, tell user no results were found.
- Images can be null
  - Show 'no-image' icon or something to tell use image does not exist.
- Move Home component logic to a /query?=:searchQuery
  - Query Page
    - Show text 'showing matches for {searchQuery}'
    - If not matches show 'no shows matching query {searchQuery}
  - Home component should show text 'getting started' with instructions for what this web app does