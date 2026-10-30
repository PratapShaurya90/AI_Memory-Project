const { PrismaClient } = require('@prisma/client');

// Initialize Prisma
const prisma = new PrismaClient();

/**
 * Saves a new fact about the user into Postgres!
 */
const createLongTermMemory = async (userId, fact, confidence) => {
    try {
        const newMemory = await prisma.longTermMemory.create({
            data: {
                userId: userId,
                fact: fact,
                confidence: confidence
            }
        });
        console.log("🧠 Fact saved to Long-Term Memory!", newMemory);
        return newMemory;
    } catch (error) {
        console.error("Error saving memory:", error);
        throw error;
    }
};

/**
 * Fetches all facts about a specific user
 */
const getUserMemories = async (userId) => {
    try {
        const memories = await prisma.longTermMemory.findMany({
            where: {
                userId: userId
            }
        });
        return memories;
    } catch (error) {
        console.error("Error fetching memories:", error);
        throw error;
    }
};

module.exports = {
    createLongTermMemory,
    getUserMemories
};
