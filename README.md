This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# React in One Documentation

This documentation provides a step-by-step guide to setting up a React project using Next.js and covers essential concepts and practices in React development.

## Table of Contents
1. [Installation](#1-installation)
2. [Project Setup](#2-project-setup)
3. [Start Development Server](#3-start-development-server)
4. [Creating React Components](#4-creating-react-components)
5. [JSX](#5-jsx)
6. [Using `className`](#6-using-classname)
7. [Defining Variables in React](#7-defining-variables-in-react)
8. [Organizing Components](#8-organizing-components)
9. [Using Props](#9-using-props)
10. [Routing with Next.js](#10-routing-with-nextjs)
11. [Layout Component](#11-layout-component)
12. [API Calling in React](#12-api-calling-in-react)

## 1. Installation

To create a new React project, follow these steps:

1. Open your terminal.
2. Run the following command:


		npx create-next-app	



# 3. Answer the following prompts:

- Project name: Enter your project name (e.g., `my-next-app`).
- TypeScript: Choose "No" for no TypeScript setup.
- ESLint: Choose "No" for no ESLint setup.
- Tailwind CSS: Choose "Yes" to set up Tailwind CSS.
- `src/` directory: Choose "No" for no custom source directory.
- App Router: Choose "Yes" to set up the recommended app router.
- Customize import alias: Choose "No" for no customization.

## 2. Project Setup

After creating your project, navigate to its directory and open it in your code editor:

	bash
	cd my-next-app
	code


# 2. Project Setup

After creating your project, navigate to its directory and open it in your code editor:

	bash
	cd my-next-app
	code .


# 3. Start Development Server
To start your development server, run:
	
	npm run dev

@4. Creating React Components
Shortcut: rafc for React Arrow Function Component

You can create a React functional component using the rafc shortcut:


# import React from 'react';

		const MyComponent = () => {
		  return (
		    <div>Hello, how are you?</div>
		  );
		};
		export default MyComponent;
		import React from 'react';
		const MyComponent = () => {
		  return (
		    <div>Hello, how are you?</div>
		  );
		};
		export default MyComponent;

#5. JSX
In React, you can write JSX (JavaScript XML) to describe your UI elements. JSX allows you to embed HTML-like code within JavaScript.
	
		const element = (
		  <>
		    <h1>Tags go here</h1>
		    <p>More content</p>
		  </>
		);


#6. Using className
I nstead of using the class attribute, you should use className in React to set CSS classes:


			const MyComponent = () => {
			  return (
			    <div className='text-red-500 text-center text-5xl'>
			      This is styled text.
			    </div>
			  );
			};


# 6. Using className
Instead of using the class attribute, you should use className in React to set CSS classes:


# 7. Defining Variables in React
Use the useState hook to define and manage variables in React. Remember to import it:

			import React, { useState } from 'react';
			const MyComponent = () => {
			  const [variableName, setVariableName] = useState(initialValue);
			  return (
			    // JSX code using variableName
			  );
			};



# 8. Organizing Components
Create a folder named Components within your project directory. Inside this folder, you can create individual component files. For example:

		my-next-app
		│
		├── Components
		│   └── Header.js



You can then import and use these components in your application:

import Header from '@/Components/Header';

// Use the Header component in your code


# 9. Using Props
Props allow you to pass data from parent components to child components. Here's an example of passing props:

// In the parent component (e.g., page.js)

	const [userName, setUserName] = useState("John Dev");
		<Header name={userName} />
		// In the Header component
		const Header = (props) => {
		  return (
		    <div>
		      <h2>{props.name}</h2>
		    </div>
		  );
		};


# 10. Routing with Next.js
To create links and handle routing in your application, use the Link component from Next.js:



		import Link from 'next/link';
		<Link href="/about">About</Link>
		<Link href="/contact">Contact</Link>



# 11. Layout Component
You can create a layout component to provide a consistent structure for your pages. Pass data and components as props to the layout component for a unified look and feel.

# 12. API Calling in React
To make API requests in React, you can use libraries like Axios. First, install Axios:


npm install axios

