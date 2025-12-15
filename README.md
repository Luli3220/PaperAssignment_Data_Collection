# Paper Assignment Data Collection

This project is a web application designed to collect data for constructing a benchmark dataset for paper-reviewer matching algorithms.

## Project Structure

- `public/`: Contains the frontend static files (HTML, CSS, JS).
- `server.js`: Node.js Express server to handle data submissions.
- `data/`: Stores the submitted survey data (excluded from version control for privacy).

## Setup & Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Server:**
   ```bash
   npm start
   ```

3. **Access the Survey:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Option 1: Node.js Hosting (Recommended)
Deploy this repository to a service that supports Node.js (e.g., Render, Railway, Heroku).
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Data Persistence:** Note that ephemeral file systems (like Heroku's) will wipe the `data/` folder on restart. For production, consider modifying `server.js` to save to a database (MongoDB/PostgreSQL) or cloud storage (S3).

### Option 2: GitHub Pages (Static Only)
**Note:** This project currently uses a Node.js backend (`server.js`) to handle submissions. GitHub Pages **cannot** run this backend.
If you deploy to GitHub Pages, the "Submit" button will fail unless you refactor the frontend to use a third-party form service (like Formspree) instead of the local API.
