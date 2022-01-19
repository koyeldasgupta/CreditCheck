# Getting Started with Credit Check App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Credit Card check app has below pages and functionalities -

     1. Home Page - This is default home with Credit Eligibility button and a banner .

     2. Credit Check - This pages asks customers to put information based on which eligible cards are shown .

  -    We can extend the available cards by adding a new Card entity inside Cards.json (mock-data/Cards.json)  with the necessary attributes along with a rule ID.
  -    We can also extend the rules for getting eligible cards by adding a new rule inside availabilityRules section inside Cards.json . While adding a new rule we need to make sure  that  we are giving the comparison field name same as we have inside the credit check form. Currently the rule supports below
  operations out of the box .
   ```
     switch(operator) {
        case 'equal' : result = customerValue === conditionValue; break;
        case 'greaterThan' : result = customerValue > conditionValue; break;
        case 'lessThan' : result = customerValue < conditionValue; break;
        default: result = false; break;
    }
   ```
   Should we need a new operator ,we need to update this switch case inside utils/GetEligibleCards.ts

   -  This application has couple of unit tests isnides _test_ folder to validate the backbone  logic of the application . npm test will start running tests .

    - This appliaction uses json-server to serve the mock json data . Please install json-server ( npm install -g json-server ) in case json-sever does not get installed automatically .

   - In the project directory, you need run below commands from different terminal:

         ### `npm start`

         ### `npm run server`

   - This application is responsive  for mobile , tablet and desktop . References to app screens are below . 

    ![Screenshot](https://github.com/koyeldasgupta/CreditCheck/master/responsive.png)
  


 

## Available Scripts

In the project directory, you need run below commands from different terminal:

### `npm start`

### `npm run server`

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
