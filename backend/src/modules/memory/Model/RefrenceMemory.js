const { PrismaClient } = require('@prisma/client');

 const prisma = new PrismaClient();
 
const createReferenceMemory = async (userId, summary, embeddingArray, originalSessionId) => {
    try { 
        const vectorString = `[${embeddingArray.join(',')}]`; 
        const newMemory = await prisma.$executeRaw`
            INSERT INTO "ReferenceMemory" ("userId", "summary", "embedding", "originalMemoryId", "createdAt") 
            VALUES (${userId}, ${summary}, ${vectorString}::vector, ${originalSessionId}, NOW())
        `;
        
        console.log("📚 Reference Memory (Vector) saved successfully!");
        return newMemory;
    } catch (error) {
        console.error("Error saving reference memory:", error);
        throw error;
    }
};
 
const searchSimilarMemories = async (userId, questionEmbeddingArray, limit = 3) => {
    try {
        const vectorString = `[${questionEmbeddingArray.join(',')}]`;
 
        const results = await prisma.$queryRaw`
            SELECT id, summary, "originalMemoryId", 
                   1 - (embedding <=> ${vectorString}::vector) as similarity_score
            FROM "ReferenceMemory"
            WHERE "userId" = ${userId}
            ORDER BY embedding <=> ${vectorString}::vector
            LIMIT ${limit};
        `;
        
        return results;
    } catch (error) {
        console.error("Error searching reference memory:", error);
        throw error;
    }
};

module.exports = {
    createReferenceMemory,
    searchSimilarMemories
};
