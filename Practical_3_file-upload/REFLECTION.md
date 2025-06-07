# Reflection

## Main Concepts Applied

- **Next.js File Routing** – Created API routes and page-based routing.
- **React Hook Form** – Used to simplify file input handling and validation.
- **Formidable** – Backend middleware to parse form-data for file uploads.
- **React Dropzone** – Added drag-and-drop interface for better UX.
- **Progress Tracking** – Displayed upload progress visually during file upload.

## What I Learned

This practical helped me understand how to handle file uploads in React and Next.js, especially multipart form data, drag and drop interfaces, and real-time progress display.

## Challenges and How I Solved Them

### 1. Form validation issues
- **Problem:** Certain file types were not accepted.
- **Solution:** Added MIME type checks in validation logic.

### 2. File not reaching backend
- **Problem:** Uploads weren’t recognized by Formidable.
- **Solution:** Ensured form’s enctype was set to `multipart/form-data`.

### 3. Drag and drop not triggering
- **Problem:** Drop area wasn’t accepting files.
- **Solution:** Used `getRootProps` and `getInputProps` from Dropzone correctly.

## Conclusion

The project improved my understanding of modern file upload features in web apps, including validation and user experience considerations.

