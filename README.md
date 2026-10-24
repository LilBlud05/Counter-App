# Counter App

A simple React counter application built with Vite. It lets users increase, decrease, and reset a number displayed on screen.

## Project overview

This project demonstrates a basic React state flow:

- the main counter value is stored in state
- buttons trigger updates to that state
- the updated value is re-rendered in the UI

## Project structure

```text
Counter-App/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images or other static files
│   ├── components/
│   │   ├── Increment.jsx   # Increases count
│   │   ├── Decrement.jsx   # Decreases count
│   │   └── Reset.jsx       # Resets count to 0
│   ├── App.jsx            # Main counter component
│   ├── App.css            # Additional styling if needed
│   ├── index.css          # Global styling
│   └── main.jsx           # App entry point
├── index.html             # Vite HTML shell
├── package.json           # Scripts and dependencies
├── vite.config.js         # Vite configuration
├── eslint.config.js       # Linting configuration
└── README.md              # Project documentation
```

## How it works

### 1. State management

In [src/App.jsx](src/App.jsx), the application uses React's useState hook to manage the current count value:

```jsx
const [count, setCount] = useState(0)
```

This creates a state variable named count initialized to 0. The setCount function updates the value whenever a button is clicked.

### 2. Counter buttons

Each button component receives the current count and the setter function as props:

- [src/components/Increment.jsx](src/components/Increment.jsx) adds 1 to the count
- [src/components/Decrement.jsx](src/components/Decrement.jsx) subtracts 1 from the count
- [src/components/Reset.jsx](src/components/Reset.jsx) sets the count back to 0

### 3. Rendering the UI

The layout in [src/App.jsx](src/App.jsx) displays the current count in a card-like panel and places the action buttons beneath it.

The main render flow is:

1. State starts at 0
2. User clicks a button
3. setCount updates the value
4. React re-renders the component with the new count
5. The updated value appears on screen

## Running the project

Install dependencies:

```bash
npm install
```

Start the app in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Technologies used

- React
- Vite
- JavaScript
- Tailwind CSS

## Summary

This app is a simple example of React state and component-based UI design. It is useful for learning how data flows from parent components to child buttons and how user interactions trigger re-renders.
