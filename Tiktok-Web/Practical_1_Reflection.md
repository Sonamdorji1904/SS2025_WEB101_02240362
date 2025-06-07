# Reflection

## Main Concepts Applied

In this practical, I used several important web development concepts:

- **Next.js App Router** – I structured the app under `src/app` using the latest App Router feature for modern routing.
- **Tailwind CSS** – Applied utility-first styling for responsive layouts and UI components.
- **Reusable Components** – Created `VideoCard`, `VideoFeed`, and layout components to standardize the UI.
- **Sidebar Navigation** – Developed a persistent navigation layout that mimics TikTok's interface.
- **Routing and Navigation** – Created routes for pages like Home, Upload, Live, Explore, and Profile.
- **React Hook Form** – Used it for building and validating login and signup forms with minimal re-renders.
- **Form Validation** – Implemented validation rules like `required`, `pattern`, and `minLength`.

---

## What I Learned

This practical helped me understand how to scaffold a modern web application using Next.js, Tailwind, and component-based design. I learned how to:

- Use App Router for layout and page routing.
- Design and organize components for reusability.
- Implement responsive UI using Tailwind classes.
- Manage form state and validation with React Hook Form.

---

## Challenges and How I Solved Them

### 1. Tailwind not working after setup
- **Problem:** The styles weren’t rendering correctly.
- **Solution:** I fixed this by ensuring that only Tailwind directives were present in `globals.css`.

### 2. Sidebar overlapping content
- **Problem:** The sidebar layout broke when switching screen sizes.
- **Solution:** Used `flex`, `w-full`, and `min-h-screen` utilities for consistent layout alignment.

### 3. Form validation messages not appearing
- **Problem:** Errors didn’t display below form fields.
- **Solution:** I used `errors.fieldName?.message` correctly and ensured the `register` method was set with validation rules.

---

## Conclusion

This practical laid the foundation for the TikTok clone project. It enhanced my understanding of modern web development practices and how to debug styling and logic issues effectively.