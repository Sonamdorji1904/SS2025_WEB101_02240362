# Practical 3: File Upload Implementation

## Instructions

### Part 1: Setup Project

1. Create a new Next.js project:
```bash
npx create-next-app file-upload
cd file-upload
````

2. Install required dependencies:

```bash
npm install react-hook-form formidable axios react-dropzone
```

### Part 2: Implement File Upload

1. Create a basic form using React Hook Form in `pages/index.js`

   * Handle file validation (type and size)

2. Create `pages/api/upload.js` for:

   * Handling file uploads with Formidable
   * Tracking upload progress
   * Enabling drag and drop functionality
