import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  // listagem das memorias
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  });

  // detalhe de uma memoria
  app.get("/memories/:id", async () => {});

  // criação da memoria
  app.post("/memories", async () => {});

  // atualização da memoria
  app.put("/memories/:id", async () => {});

  app.delete("/memories/:id", async () => {});
}
