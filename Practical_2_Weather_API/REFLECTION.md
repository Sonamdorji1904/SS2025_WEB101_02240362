# Reflection

## Main Concepts Applied

This practical involved building a frontend-only app that interacts with public REST APIs using JavaScript. Key concepts applied include:

- **RESTful Operations** – Implemented GET, POST, PUT, and DELETE using `fetch`.
- **Weather API Integration** – Fetched live data from OpenWeatherMap.
- **Fake Backend for CRUD** – Used JSONPlaceholder to simulate persistent behavior.
- **DOM Manipulation** – Created and updated UI elements based on API responses.

---

## What I Learned

I learned how to:

- Communicate with APIs using different HTTP methods.
- Handle API responses and update the DOM dynamically.
- Structure JavaScript logic to separate concerns (UI vs API logic).
- Debug API calls using console logs and network tab.

---

## Challenges and How I Solved Them

### 1. CORS errors on fetch
- **Problem:** API responses were blocked due to CORS policies.
- **Solution:** Used CORS-compliant APIs and tested via localhost.

### 2. Weather API not returning data
- **Problem:** Invalid API key or wrong query string.
- **Solution:** Replaced placeholder with valid key and ensured URL was correctly formatted.

### 3. DOM not updating after edits
- **Problem:** After PUT/DELETE, UI didn’t refresh.
- **Solution:** Refreshed location display after each successful API response.

---

## Conclusion

This practical helped me understand API interaction without a backend server. I now feel more confident working with RESTful endpoints and dynamically updating frontend applications.
