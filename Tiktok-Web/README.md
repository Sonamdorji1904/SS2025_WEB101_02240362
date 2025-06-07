# Practical 1: TikTok Web Interface Setup

## Instructions

### Part 1: Getting Started

1. Navigate to your project directory and create a new Next.js project:
   ```bash
   npx create-next-app@latest
   ```
   Configure with:
   - TypeScript: No
   - ESLint: Yes
   - Tailwind CSS: Yes
   - src directory: Yes
   - App Router: Yes

2. Clean up the default project:
   - Replace `page.js` with a basic component.
   - Clean `globals.css` to retain only Tailwind imports.

3. Set up project structure:
   ```bash
   mkdir -p src/components/layout
   mkdir -p src/components/ui
   mkdir -p src/lib
   mkdir -p src/app/profile
   mkdir -p src/app/upload
   ```

4. Create basic layout components and update layout.js.

5. Create pages:
   - Home
   - Profile
   - Upload
   - Explore
   - Following
   - Live

6. Run development server:
   ```bash
   npm run dev
   ```

### Part 2: Web Layout and Main Interface

1. Install dependencies:
   ```bash
   npm install react-icons
   ```

2. Update layout and sidebar.

3. Create:
   - `VideoCard.jsx`
   - `VideoFeed.jsx`

4. Update `page.js` to show video feed.

### Part 3: Login and Registration

1. Install:
   ```bash
   npm install react-hook-form
   ```

2. Create:
   - Login page
   - Signup page
   - Hook form validation
   - Add links in `MainLayout.jsx`

3. Test forms for validation and submission.

---

# Practical 4: Connecting Frontend to Backend

## Instructions

### Part 1: API Configuration and Authentication

1. Install dependencies:
   ```bash
   npm install axios jwt-decode react-hot-toast
   ```

2. Configure Axios in `api-config.js` and create `.env.local` with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

3. Create Auth context:
   - `authContext.jsx`
   - Wrap `layout.js` with AuthProvider

4. Build Authentication UI:
   - `Modal.jsx`
   - `AuthForms.jsx`
   - `AuthModal.jsx`

5. Update `MainLayout.jsx` with login/logout functionality

### Part 2: Video Feed and User Integration

1. Create video service: `videoService.js`
2. Create user service: `userService.js`
3. Update `VideoCard.jsx` for real data
4. Update `VideoFeed.jsx` for real video loading

### Part 3: User Discovery and Following

1. Create:
   - `following/page.jsx`
   - `explore-users/page.jsx`
   - `profile/[userId]/page.jsx`
   - Upload page update: `upload/page.jsx`

2. Test by:
   - Creating multiple users
   - Uploading videos
   - Following other users
   - Liking, commenting, viewing profiles


---

# Practical 5: Infinite Scroll with TanStack Query

## Instructions

### Overview

- Implement infinite scroll using `useInfiniteQuery` with cursor-based pagination.
- Use IntersectionObserver API to detect scroll.

### Part 1: Backend Setup

1. Update backend controllers:
   - `getAllVideos` with cursor
   - `getFollowingVideos` with cursor

2. Response includes:
   - `nextCursor`
   - `hasNextPage`

### Part 2: Frontend Setup

1. Install:
   ```bash
   npm install @tanstack/react-query @tanstack/react-query-devtools
   ```

2. Wrap app in `QueryClientProvider`.

3. Update `videoService.js` for cursor pagination.

4. Create `useIntersectionObserver.js` hook.

5. Update `VideoFeed.jsx`:
   - Use `useInfiniteQuery`
   - Fetch more on scroll

### Key Differences from Offset-Based Pagination

- Cursor-based uses unique ID as pointer.
- Avoids issues with content mutation.
- More efficient for large data sets.

