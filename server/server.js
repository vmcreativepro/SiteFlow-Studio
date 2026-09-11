import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Use the port provided by the host (Hostinger) or default to 5000
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'projects.json');

// Ensure DB file exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, '[]', 'utf8');
}

const readDb = () => {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading DB:", err);
        return [];
    }
};

const writeDb = (data) => {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Error writing DB:", err);
    }
};

// GET all projects
app.get('/api/projects', (req, res) => {
    const projects = readDb();
    res.json(projects);
});

// POST (Upsert) project
app.post('/api/projects', (req, res) => {
    const newProject = req.body;
    let projects = readDb();

    // Check if project exists to update it, otherwise add new
    const existingIndex = projects.findIndex(p => p.id === newProject.id);
    
    if (existingIndex >= 0) {
        projects[existingIndex] = {
            ...projects[existingIndex],
            ...newProject,
            updated: new Date().toISOString()
        };
    } else {
        projects.push({
            ...newProject,
            updated: new Date().toISOString()
        });
    }

    writeDb(projects);
    res.json({ success: true, project: newProject });
});

// --- PRODUCTION SERVING ---
// Serve static files from the 'dist' directory (Vite build output)
// This allows the Node server to serve the React frontend in production
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // Catch-all route to serve index.html for client-side routing
    // ensuring we don't intercept API routes
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(distPath, 'index.html'));
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});