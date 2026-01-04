// src/js/db.js
const DB_KEY = "fbudget_data";

// --- CORE DATABASE LOGIC ---
function getDB() {
    const data = localStorage.getItem(DB_KEY);
    if (!data) {
        // Initialize empty database
        const initData = { projects: [], transactions: [] };
        localStorage.setItem(DB_KEY, JSON.stringify(initData));
        return initData;
    }
    return JSON.parse(data);
}

function saveDB(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
}

// --- PUBLIC API ---
const api = {
    // PROJECTS
    getProjects: async () => getDB().projects,

    addProject: async (name, client, status, budget) => {
        const db = getDB();
        const newProject = {
            id: Date.now(),
            name, client, status, budget
        };
        db.projects.push(newProject);
        saveDB(db);
        return newProject;
    },

    updateProject: async (id, updates) => {
        const db = getDB();
        const index = db.projects.findIndex(p => p.id === id);
        if (index !== -1) {
            db.projects[index] = { ...db.projects[index], ...updates };
            saveDB(db);
        }
    },

    deleteProject: async (id) => {
        const db = getDB();
        db.projects = db.projects.filter(p => p.id !== id);
        db.transactions = db.transactions.filter(t => t.project_id !== id);
        saveDB(db);
    },

    // TRANSACTIONS
    getTransactions: async (projectId) => {
        const db = getDB();
        return db.transactions.filter(t => t.project_id === projectId);
    },

    addTransaction: async (projectId, desc, cat, amt) => {
        const db = getDB();
        db.transactions.push({
            id: Date.now(),
            project_id: projectId,
            description: desc,
            category: cat,
            amount: amt,
            date: new Date().toLocaleDateString()
        });
        saveDB(db);
    },

    updateTransaction: async (id, desc, cat, amt) => {
        const db = getDB();
        const idx = db.transactions.findIndex(t => t.id === id);
        if (idx !== -1) {
            db.transactions[idx] = { ...db.transactions[idx], description: desc, category: cat, amount: amt };
            saveDB(db);
        }
    },

    deleteTransaction: async (id) => {
        const db = getDB();
        db.transactions = db.transactions.filter(t => t.id !== id);
        saveDB(db);
    }
};