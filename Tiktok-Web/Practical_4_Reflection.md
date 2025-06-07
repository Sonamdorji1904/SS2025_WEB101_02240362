# Reflection

## Main Concepts Applied

This practical focused on connecting the frontend to a real backend server. The major concepts applied include:

- **Axios Configuration** – Set up Axios with interceptors to handle JWT-based authentication.
- **JWT Authentication** – Managed login/logout and user state with JSON Web Tokens.
- **React Context API** – Used context (`AuthContext`) to share auth state across the app.
- **API Services** – Separated video and user API calls into `videoService.js` and `userService.js`.
- **Dynamic Routing** – Implemented profile pages using dynamic `[userId]` routing in Next.js.
- **Real-Time Interaction** – Enabled real video interaction like liking, following, and commenting.

---

## What I Learned

This practical taught me how to connect frontend components with a real Express.js backend. I learned to:

- Store and manage tokens securely for protected API routes.
- Use React Context for global auth state management.
- Fetch, render, and interact with real-time user and video data.
- Build authenticated routes and personalized video feeds.

---

## Challenges and How I Solved Them

### 1. CORS issues from frontend to backend
- **Problem:** API calls were blocked by CORS policy.
- **Solution:** Enabled CORS in Express and matched the frontend’s origin URL.

### 2. Auth state not persisting on refresh
- **Problem:** On refreshing the page, user state was lost.
- **Solution:** Used `useEffect` to restore state from localStorage during app initialization.

### 3. Like and follow buttons didn’t update UI
- **Problem:** Clicking like/follow didn’t reflect immediately.
- **Solution:** Used optimistic UI updates and refreshed state after API response.

---

## Conclusion

This was a crucial practical to make the app fully dynamic and interactive. I now understand how to build full-stack features that connect user actions to persistent backend operations.