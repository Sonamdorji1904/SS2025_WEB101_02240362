# Practical 6 – State Management with Zustand

This practical focuses on building a Todo List application using React and Zustand for state management. The main goal is to learn how Zustand simplifies global state management compared to traditional methods.

## Setup Instructions

1. Create a new project:
```

npx create-vite\@latest todo-zustand
cd todo-zustand
npm install
npm install zustand

```

2. File Structure:
```

src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.js
└── index.js

```

3. Add persistence to store using Zustand’s `persist` middleware.

4. Start the app:
```

npm run dev

```
