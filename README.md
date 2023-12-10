# Timeloop - Front-end (React + Vite)

Welcome to the front-end of Timeloop! This is a React application that uses Vite as a bundler. It is written in JavaScript and uses Tailwind CSS for styling.

## Getting Started

To get started, first be sure to have **Node.js** installed. If you don't, you can download it [here](https://nodejs.org/en/).

**IMPORTANT: Please install the LTS version, as it is the most stable.**

Once you have **Node.js** installed, you can proceed to clone this repository by running the following command:

```bash
git clone <repository-url>
```

Then, navigate to the `timeloop-frontend` directory:

```bash
cd timeloop-frontend
```

Once you are in the `timeloop-frontend` directory, run the following command to install all dependencies:

```bash
npm install
```

Finally, run the following command to start the development server:

```bash
npm run dev
```

If everything went well, you should see a url in the terminal that you can open in your browser. If you open it, you should see the Timeloop application.

If you want to run the development server exposing it to the network, run the following command instead:

```bash
npm run dev --host
```

## Git Workflow

We will be using the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for this project. This means that we will have two main branches: `main` and `dev`. The `main` branch will contain the latest stable version of the application, while the `dev` branch will contain the latest changes that are being worked on.

When you want to work on a new feature, you should create a new branch from the `dev` branch. For example, if you want to work on a feature called `login`, you should create a new branch called `feature/login` from the `dev` branch. Once you are done working on the feature, you should create a merge request to merge your changes into the `dev` branch. Once the merge request is approved, your changes will be merged into the `dev` branch.

When we are ready to release a new version of the application, we will create a new branch called `release/<version>` from the `dev` branch. For example, if we want to release version `1.0.0`, we will create a new branch called `release/1.0.0` from the `dev` branch. Once we are done working on the release, we will create a merge request to merge the changes into the `main` branch. Once the merge request is approved, the changes will be merged into the `main` branch and a new version of the application will be released.

For this project, we won't be using hotfixes, so we won't be creating any branches called `hotfix/<version>`.

![Gitflow Workflow Example Diagram](https://i.ibb.co/ZSLwkXV/gitflow-example.jpg)

### Branch Naming

For this project, we will be using the following branch naming convention:

- `feature/<name>` for new features
- `release/<version>` for releases

### Commit Messages

For this project, we won't be using any specific commit message format. However, it is encouraged that your commit messages are descriptive and follow the [Seven Rules of a Great Git Commit Message](https://chris.beams.io/posts/git-commit/#seven-rules).

### Pull/Merge Requests

For this project, we will be using [GitLab](https://gitlab.com/) for hosting the repository. This means that we will be using [Merge Requests](https://docs.gitlab.com/ee/user/project/merge_requests/) instead of [Pull Requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) for code reviews.

Each merge request should have a title and a description. The title should be descriptive and the description should explain what changes were made and why. If the merge request is related to an issue, you should also include a link to the issue in the description.

## Code Editor

For this project, it is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as the code editor. This is because it has a lot of useful extensions that will help you with your development.

If you don't want to use Visual Studio Code, you can use any other code editor that you want. However, you will need to install the equivalent extensions for your code editor.

### Required Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (required) for code linting (see [Code Style](#code-style))
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (required) for code formatting (see [Code Style](#code-style))
- [Postman](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (required) for testing API endpoints.

### Optional Extensions

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) (optional) for highlighting errors in the editor.
- [Error Gutters](https://marketplace.visualstudio.com/items?itemName=IgorSbitnev.error-gutters) (optional) for displaying errors in the gutter.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (optional) for Tailwind CSS support.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (optional) for Git visualization and code annotation.
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) (optional) for AI-powered code suggestions.

## Guidelines

### Code Style

For this project, we will be using the [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/) for code style. This means that we will be using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce the code style.

### Code Structure

For this project, we will be using the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for structuring the code. This means that we will be using the following folder structure:

- `src/components` for components
- `src/containers` for containers
- `src/pages` for pages
- `src/styles` for stylesheets
- `src/utils` for utility functions

### Components

#### What is a Component?

A component is a reusable piece of code that can be used to build the user interface. It can be a button, a form, a table, etc.

#### Component Structure

For this project, we will be using [React](https://reactjs.org/) for building the user interface. This means that we will be using [JSX](https://reactjs.org/docs/introducing-jsx.html) for writing the components.

Each component should be placed in its own folder. The folder should be named after the component. For example, if you have a component called `Button`, you should place it in a folder called `Button`.

Each component should have its own stylesheet. The stylesheet should be named after the component. For example, if you have a component called `Button`, you should place its stylesheet in a file called `Button.module.css`.

All components should be named using the [PascalCase](https://en.wikipedia.org/wiki/PascalCase) naming convention. For example, if you have a component called `Button`, you should name it `Button`.

The file extension for the components should be `.jsx`. For example, if you have a component called `Button`, you should place it in a file called `Button.jsx`.

### Containers

#### What is a Container?

A container is a component that is responsible for fetching data from the API and passing it down to its children. It is also responsible for handling any errors that may occur while fetching the data.

#### Container Structure

For this project, we will be using [React](https://reactjs.org/) for building the user interface. This means that we will be using [JSX](https://reactjs.org/docs/introducing-jsx.html) for writing the containers.

Each container should be placed in its own folder. The folder should be named after the container. For example, if you have a container called `Login`, you should place it in a folder called `Login`.

Each container should have its own stylesheet. The stylesheet should be named after the container. For example, if you have a container called `Login`, you should place its stylesheet in a file called `Login.module.css`.

All containers should be named using the [PascalCase](https://en.wikipedia.org/wiki/PascalCase) naming convention. For example, if you have a container called `Login`, you should name it `Login`.

The file extension for the containers should be `.jsx`. For example, if you have a container called `Login`, you should place it in a file called `Login.jsx`.

### Pages

#### What is a Page?

A page is a component that is responsible for rendering the user interface. It is also responsible for handling any user interactions that may occur while rendering the user interface.

#### Page Structure

For this project, we will be using [React](https://reactjs.org/) for building the user interface. This means that we will be using [JSX](https://reactjs.org/docs/introducing-jsx.html) for writing the pages.

Each page should be placed in its own folder. The folder should be named after the page. For example, if you have a page called `Home`, you should place it in a folder called `Home`.

Each page should have its own stylesheet. The stylesheet should be named after the page. For example, if you have a page called `Home`, you should place its stylesheet in a file called `Home.module.css`.

All pages should be named using the [PascalCase](https://en.wikipedia.org/wiki/PascalCase) naming convention. For example, if you have a page called `Home`, you should name it `Home`.

The file extension for the pages should be `.jsx`. For example, if you have a page called `Home`, you should place it in a file called `Home.jsx`.

### Styling

For this project, we will be using [Tailwind CSS](https://tailwindcss.com/) for styling.

The Tailwind CSS configuration file is located at `tailwind.config.js`. You can use this file to configure Tailwind CSS.

The Tailwind CSS stylesheets are located at `src/styles`. You can use these stylesheets to add custom styles.

If you want to use Tailwind CSS classes in your components, containers or pages, you can import the `tailwind.css` stylesheet in your component. For example, if you have a component called `Button`, you can import the `tailwind.css` stylesheet in your component like this:

```jsx
import React from 'react';
import styles from './Button.module.css';
import './tailwind.css';
```

### Utility Functions

For this project, we will be using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for writing utility functions.

Each utility function should be placed in its own file. The file should be named after the utility function. For example, if you have a utility function called `formatDate`, you should place it in a file called `formatDate.js`.

All utility functions should be named using the [camelCase](https://en.wikipedia.org/wiki/Camel_case) naming convention. For example, if you have a utility function called `formatDate`, you should name it `formatDate`.

The file extension for the utility functions should be `.js`. For example, if you have a utility function called `formatDate`, you should place it in a file called `formatDate.js`.

## Testing

For this project, all the testing will be done manually. This means that we won't be using any automated testing tools like [Jest](https://jestjs.io/) or [Cypress](https://www.cypress.io/). Instead, we will be using [Postman](https://www.postman.com/) for testing the API endpoints.

### Postman

For this project, we will be using [Postman](https://www.postman.com/) for testing the API endpoints manually. This means that we will be using the [Postman](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for [Visual Studio Code](https://code.visualstudio.com/) to send requests to the API endpoints.

## Deployment

For this project, we will be using [Vercel](https://vercel.com/) for hosting the application. All the deployment will be done automatically using [Vercel](https://vercel.com/) and [GitLab](https://gitlab.com/).

Given that we are using a self-hosted GitLab instance, we will need to configure [Vercel](https://vercel.com/) to use our self-hosted GitLab instance.

Further instructions on how to configure [Vercel](https://vercel.com/) to use our self-hosted GitLab instance will be provided in the future.
