# Timeloop - Front-end (React + Vite)

Welcome to the front-end of Timeloop! This is a React application that uses Vite as a bundler. It is written in JavaScript and uses Tailwind CSS for styling.

This README contains all the information you need to get started with the project. It also contains some guidelines that you should follow when working on the project. Please read it carefully before starting to work on the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
  - [Branch Naming](#branch-naming)
  - [Commit Messages](#commit-messages)
  - [Git Pull/Push](#git-pullpush)
  - [Pull/Merge Requests](#pullmerge-requests)
- [Code Editor](#code-editor)
  - [Required Extensions](#required-extensions)
  - [Optional Extensions](#optional-extensions)
- [Guidelines](#guidelines)
  - [Code Style](#code-style)
  - [Code Structure](#code-structure)
  - [Env Variables and Modes](#env-variables-and-modes)
  - [Components](#components)
    - [What is a Component?](#what-is-a-component)
    - [Component Structure](#component-structure)
  - [Containers](#containers)
    - [What is a Container?](#what-is-a-container)
    - [Container Structure](#container-structure)
  - [Pages](#pages)
    - [What is a Page?](#what-is-a-page)
    - [Page Structure](#page-structure)
  - [Styling](#styling)
  - [Utility Functions](#utility-functions)
- [Testing](#testing)
  - [Postman](#postman)
- [Deployment](#deployment)
- [OS Reccomendations](#os-reccomendations)
- [Terminal Reccomendations](#terminal-reccomendations)

## Requirements

- [Node.js](https://nodejs.org/en/) (LTS version)
- [npm](https://www.npmjs.com/) (comes pre-installed with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Package Manager

For this project, we will be using [npm](https://www.npmjs.com/) as the package manager. This means that we will be using [npm](https://www.npmjs.com/) to install all the dependencies. The package manager [npm](https://www.npmjs.com/) comes pre-installed with [Node.js](https://nodejs.org/en/), so you don't need to install it separately.

## Getting Started

To get started, first be sure to have **Node.js** installed. If you don't, you can download it [here](https://nodejs.org/en/).

> **IMPORTANT: Please install the LTS version, as it is the most stable.**

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

If you want to run the development server exposing it to the network, run the following command instead:

```bash
npm run dev -- --host
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

### Git Pull/Push

For this project, we will follow good practices when it comes to pulling and pushing changes to the repository. This means that we will always pull before pushing and we will always push to the correct branch.

Example:

```bash
# Pull changes from the remote repository
git pull

# Push changes to the remote repository
git push origin <branch-name>
```

Where `<branch-name>` is the name of the branch you want to push to.

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

### Env Variables and Modes

For this project, we will be using [dotenv](https://www.npmjs.com/package/dotenv) for managing environment variables. This means that we will be using a `.env` file to store all the environment variables.

The `.env` file should be placed in the root directory of the project. It should not be committed to the repository.

The `.env` file should contain the following environment variables:

- `VITE_APP_NAME` for the name of the application
- `VITE_APP_DESCRIPTION` for the description of the application
- `VITE_BASE_URL` for the base URL of the application (without the trailing slash)
- `VITE_API_URL` for the base URL of the API and the version (without the trailing slash)
- `VITE_API_KEY` for the API key
- `VITE_TOKEN_NAME` for the name of the token that handles user authentication

When running the application in development mode, the `.env.local` file will be used. When running the application in production mode, the `.env` file will be used. The `.env.local` file is already created for you, so you don't need to create it, just modify it.

For deployment, we will be using [Vercel](https://vercel.com/). This means that we will be using [Vercel](https://vercel.com/) to manage the environment variables. The environment variables will be stored in the [Vercel](https://vercel.com/) dashboard.

Please refer to the `.env.example` file for an example of how the .env file should look like.

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

The Tailwind CSS stylesheets are located at `src/index.css`. You can use these stylesheets to add custom styles.

For more information on how to use Tailwind CSS, please refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs).

You are allowed to use existing Tailwind CSS components. I recommend using [Tailwind UI](https://tailwindui.com/) for this. However, you can also refer to [Flowbite](https://flowbite.com/) for more components. Remember to always use the [Tailwind CSS Documentation](https://tailwindcss.com/docs) as a reference and ensure that the components are appropriate for the project design.

### Icons

For this project, we will be using [Heroicons](https://heroicons.com/) for icons.

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

## OS Reccomendations

There are no limitations on the OS you can use for this project. However, it is recommended to use **Linux** or **MacOS** instead of **Windows**.

## Terminal Reccomendations

Since the whole team is not fully familiarized with the terminal, you can use the following tools to make your life easier:

It is recommended to use zsh instead of bash, since it has a lot of useful features that will make your life easier. However, you can use bash if you want.

If you are using **MacOS**, you can use [Warp](https://warp.dev/) instead of the default terminal.

If you decide to use **zsh**, you can use [Oh My Zsh](https://ohmyz.sh/) to have a better terminal experience.

To enhance the look of your terminal, you can use [Powerlevel10k](https://github.com/romkatv/powerlevel10k) to have a better looking terminal.

Detailed instructions on how to install and configure these tools is available [here - Oh My Zsh + Powerlevel10k](https://dev.to/abdfnx/oh-my-zsh-powerlevel10k-cool-terminal-1no0).
