# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



I tried my best and added all the required functionalities hope you like i
t
 Destination Explorer:
○ Implementd a page to search for destinations by city.
○ Display a list of destinations with their names, ratings, and the
number of reviews.
○ Use dummy data for destinations, including properties such as
name, rating, and reviews.
2. Review System:
○ Implemented a review system for destinations.
○ Display reviews with information such as destination name,
review, rating, and user name.
3. Itinerary Planner:
○ Create a page for users to plan itineraries.
○ Implemented a form to create a new itinerary with details such as
name, date to start, and a list of destinations for the itinerary.
○ Initially while creating the itinerary it should be empty. Users can
add places using a given search bar, and on click it destinations
will be added as shown in UI.
○ Save the itineraries using dummy data.
○ This specific part will need some logic building.
4. Existing Itineraries:
○ Display a list of existing itineraries with their names, reviews,
and ratings.
○ Don’t need to build itinerary detail but some hint of clicking on
itinerary is welcomed
5. Additional Features (Optional):
○ Implement search functionality for itineraries.
○ Add the ability to edit and delete existing itineraries.
○ Enhance the UI for a better user experience.

