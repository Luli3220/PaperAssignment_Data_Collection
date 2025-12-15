const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'submissions.jsonl');

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Handle form submissions
app.post('/api/submit', (req, res) => {
    try {
        const submission = req.body;
        
        // Simple validation
        if (!submission.profile || !submission.profile.email) {
            return res.status(400).send('Missing required fields');
        }

        // Append to JSONL file
        const line = JSON.stringify(submission) + '\n';
        
        fs.appendFile(DATA_FILE, line, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Internal Server Error');
            }
            console.log(`Received submission from ${submission.profile.email}`);
            res.status(200).send('Submission received');
        });

    } catch (error) {
        console.error('Error processing submission:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
