# Use Input With ReactJS

A simple React + Vite project that demonstrates how to capture and display user input using the `useState` hook.

## Overview

This app contains a text input field and a button styled with a lime-themed UI. As the user types, the value is stored in React state and displayed live below the input.

It is a beginner-friendly example for learning:

- React state management
- controlled inputs
- event handling in React
- component-based UI design

## Features

- Text input with live preview
- React state handling using `useState`
- Responsive centered layout
- Simple, modern UI
- Built with Vite for fast development

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion (included in dependencies)

## Project Structure

```bash
Use-Input-With-ReactJs/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       └── Todo.jsx
├── .gitignore
├── .oxlintrc.json
├── yarn.lock
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/gavithgethmin01/Use-Input-With-ReactJs.git
cd Use-Input-With-ReactJs
npm install
```

or using Yarn:

```bash
yarn install
```

### Run the app

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## App Behavior

When the user types into the input field, the component updates the `text` state and instantly shows:

```text
You typed: {your value}
```

This is a basic example of a controlled input in React.

## License

This project is open for learning and personal use.

## Author

@gavithgethmin01
