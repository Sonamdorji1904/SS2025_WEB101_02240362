# Reflection

## Main Concepts Applied

This practical focused on building a Todo List app using Zustand for state management. Concepts applied include:

- **Zustand Store** – Created a centralized store for todos with actions.
- **Global State Access** – Used Zustand hooks to access and update state in any component.
- **LocalStorage Persistence** – Stored todos persistently using Zustand middleware.
- **Component Separation** – Built modular components for input, display, and individual todo items.

---

## What I Learned

I learned how to:

- Create and manage state globally without prop drilling or Context.
- Keep application state persistent across reloads using Zustand’s middleware.
- Build and update UI based on state changes efficiently.
- Use hooks to subscribe to only necessary slices of state.

---

## Challenges and How I Solved Them

### 1. State updates not reflecting immediately
- **Problem:** UI didn’t always update after toggling or removing a todo.
- **Solution:** Carefully followed Zustand’s immutability pattern using the `set` function.

### 2. Persistence not working as expected
- **Problem:** After refresh, todos didn’t load from localStorage.
- **Solution:** Imported and used `persist` middleware correctly and debugged localStorage usage.

### 3. Component re-renders
- **Problem:** All components re-rendered unnecessarily.
- **Solution:** Subscribed to only specific pieces of state inside each component.

---

## Conclusion

Zustand made global state management intuitive and lightweight. I now have a better understanding of modern React state management alternatives beyond Redux or Context API.
