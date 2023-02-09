<h1>React Bad Bank Application</h1>

<h2><b>Welcome to the React Bad Bank!</b></h2>
<p>At Bad Bank, we take pride in our dedicated services to meeting your financial needs! We're able to keep track of your account with ease from deposits to withdrawals, to checking all the data you've provided to us, which are all viewable and interactive through our awesome website! But since none of that money is real and we aren't getting paid, we don't have any security! And that's where we get our name. Although we may not be able to provide you with any <b><i>real</i></b> services, feel free to check out how the page works and play around with the functionality!</p>

<br/>

<p>In this project, we learn how to control and manipulate state across the application, utilize tools like <a href="https://firebase.google.com"><b>Firebase</b></a> Realtime Database and Authentication, and run on <a href="https://www.docker.com/"><b>Docker</b></a> and cloud services like <a href="https://aws.amazon.com/"><b>AWS</b></a>.</p>

<br/>

<h2><b>Clone and Setup Project</b></h2>

<p>To clone the project, simply enter into your terminal</p>

```bash
git clone git@github.com:JiBang92/react-bad-bank.git
```

<p>Then, install all the dependencies<p>

```bash
npm install
```

<br/>

<h3><b>package.json</b></h3>

<p>If you take a look at the <b><i>package.json</i></b> file, you'll notice that there are quite a few dependencies. Most of these come with <b><i>npx create-react-app</i></b>, which is how I setup the project. If you're setting up the project by scratch, follow the step by step instructions <a hre=""><b>here</b></a> or refer to <a href="#create-react-app"><b>Getting Started with Create React App</b></a>.</p>

```json
  "dependencies": {
    "@popperjs/core": "^2.11.6",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.3.0-alpha1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```

<p>For now, just in case something is missing you can try installing the dependencies manually</p>

```bash
# Bootstrap JS
npm install @popperjs/core

# React-Bootstrap
npm install bootstrap

# React
npm install react

# React DOM
npm install react-dom

# React Router DOM
npm install react-router-dom
```

<br/>

<h2><b>Run The Application</b></h2>

<p>In your terminal, go into the project directory and enter the script to run the application</p>

```bash
# Go into project directory
cd <project directory>

# Start the application
npm run start
```

<p>And there you go! You should be able to run the application on your local machine by navigating to <a href="http://localhost:3000"><b>localhost:3000</b></a>.</p>

<img src="./src/images/react-bad-bank.png" alt="React Bad Bank Landing Page" width="750px"/>

<br/>
<br/>
<br/>
<br/>
<br/>

<h1 id="create-react-app">Getting Started with Create React App</h1>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
