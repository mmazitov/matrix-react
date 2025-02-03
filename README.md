<h1 align="center">React Matrix</h1>

## 🎯 About

Welcome to the **Matrix** project, an interactive React application designed for educational purposes. This project demonstrates the use of modern React, TypeScript, and Vite for building matrix-based visualizations and interactions.

## 🛠 Tech Stack

- **[React:](https://react.dev/)** A JavaScript library for building user interfaces.
- **[TypeScript:](https://www.typescriptlang.org/)** A programming language that adds static typing to JavaScript.
- **[React Icons:](https://react-icons.github.io/react-icons/)** A collection of popular icons for React.
- **[ESLint:](https://eslint.org/)** A tool for identifying and fixing problems in JavaScript code.
- **[Prettier:](https://prettier.io/)** An opinionated code formatter.
- **[Vite:](https://vite.dev/)** A build tool that provides a faster and leaner development experience for modern web projects.

## ✨ Features

- **Dynamic Matrix Generation:** Create matrices with user-specified dimensions.
- **Interactive Form:** Provides input validation and user-friendly error messages.
- **Matrix Manipulation:** Add rows and reset the matrix.
- **Visual Representation:** Includes components such as heatmaps, row headers, and footers to enhance matrix visualization.
- **Modern Tooling:** Built with Vite, React, and TypeScript for a fast development experience.

## 📁 Project Structure

```
matrix/
├── index.html               # Entry point HTML file
├── package.json             # Project configuration and scripts
├── tsconfig.app.json        # TS configuration for app code
├── tsconfig.node.json       # TS configuration for Node-related code
└── src/
    ├── main.tsx             # Application entry point
    ├── context/
    │   └── MatrixContext.tsx# Context provider for matrix state management
    ├── components/
    │   ├── Matrix.tsx       # Main matrix component
    │   ├── MatrixForm.tsx   # Form component for matrix controls
    │   ├── Heatmap.tsx      # Matrix heatmap visualization
    │   ├── RowHeader.tsx    # Component for rendering row headers
    │   └── RowFooter.tsx    # Component for rendering row footers
    └── types/
        └── matrix.ts        # Type definitions for matrix and cell structures
```

## 🏁 Starting

```
Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

# Clone this project
$ git clone https://github.com/mmazitov/matrix-react

# Access
$ cd matrix-react

# Install the dependencies using Yarn or npm:
$ yarn install or $ npm install

#To start the development server, run:
$ npm run dev or $ yarn dev

# To build the project for production, run:
$ npm run build or $ yarn build

# To preview the production build, run:
$ npm run preview or $ yarn preview

# Lint project
$ npm lint or $ yarn lint


```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
