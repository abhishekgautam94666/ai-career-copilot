import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
const PORT = 5000;

const prisma = new PrismaClient()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Career Copilot backend is running")
})

app.get("/api/healthy", (req, res) => {
    res.json({
        success: true,
        message: "Backend is healthy"
    });
});


app.get("/api/db-check", async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        res.json({
            success: true,
            message: "Database connected successfully",
        });
    } catch (error) {
        console.error("Database connection failed:", error);

        res.status(500).json({
            success: false,
            message: "Database connection failed",
        });
    }
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
