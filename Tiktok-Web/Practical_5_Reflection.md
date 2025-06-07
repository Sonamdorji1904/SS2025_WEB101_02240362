# Reflection

## Main Concepts Applied

This practical was about building infinite scrolling using modern pagination techniques. Key concepts included:

- **Cursor-Based Pagination** – Used cursors instead of page numbers for consistent scrolling behavior.
- **TanStack Query** – Leveraged `useInfiniteQuery` for handling paginated API data and caching.
- **Intersection Observer API** – Detected when a user scrolls to the end of the video feed.
- **Video Feed Updates** – Dynamically appended video content without page reloads.
- **Backend Cursor Logic** – Implemented “n+1” pattern to detect if more data exists.

---

## What I Learned

This practical deepened my knowledge of advanced React and API integration. I learned:

- How `useInfiniteQuery` works with pagination and caching.
- How IntersectionObserver can efficiently load content as the user scrolls.
- Why cursor pagination is better suited for dynamic datasets than offset-based.

---

## Challenges and How I Solved Them

### 1. Intersection Observer didn’t trigger
- **Problem:** Scrolling to the bottom didn’t load more videos.
- **Solution:** Adjusted the observer’s root margin and ensured `ref` was attached to the last video.

### 2. Backend cursor returned duplicate records
- **Problem:** Some videos were repeating on scroll.
- **Solution:** Fixed ordering and ensured cursor was applied consistently with unique IDs.

### 3. Empty state handling
- **Problem:** When there were no more videos, the UI broke.
- **Solution:** Added checks using `hasNextPage` and rendered a fallback message.

---

## Conclusion

This practical made the app more fluid and responsive. I now understand how infinite scrolling is implemented in modern social media applications and how to integrate it cleanly using hooks and backend logic.