# Project Rule

1. Daily report on Komu before 10am
2. Create Pull Request for merging. DON'T push into `master` branch and `timesheet-tutorial` directly.

# TODO App 
## Requirement

1. Create a powerful Todo app with React and Typescript

- Todo list with CRUD functions
- Filter by status: All/Completed/Active
- Counter for each status. All: `3 active items / 10 items`; Completed: `7 completed items / 10 items`, Active: `3 active items / 10 items`.
- Bonus (Optional): Add timing for each Items. Notify when it nearly the deadline (before deadline 1h)

2. Should has great UI
3. Integrate with BE (Can reuse [Placeholder](https://jsonplaceholder.typicode.com/) or create your own BE by using [mockend](https://mockend.com/))
4. Recommend Library 
- Redux basic (Without Redux toolkit to understand the main idea of Redux)
- Axios (Create axios instance)

## [NCC React basic checklist](https://nccasia.github.io/ncc-react-basic/)

https://nccasia.github.io/ncc-react-basic/

## [How to Write Cleaner React Code](https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/)

https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/

## Working Process

1. Create new branch from master

```
git checkout -b your-full-name
```

2. Push your branch to remote

```
git push origin your-full-name
```

3. Create new branch depend on your working feature

```
git checkout -b feature/your-feature
```

4. Commit your change, after that push your working feature to remote. Finally Create Pull Request to merge `your-feature` branch into `your-full-name` branch.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
