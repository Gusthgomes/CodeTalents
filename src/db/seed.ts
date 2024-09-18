import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criando categorias
  const category1 = await prisma.category.create({
    data: {
      name: "Tecnologia",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Marketing",
    },
  });

  // Criando vagas
  await prisma.vacancy.createMany({
    data: [
      {
        title: "Desenvolvedor Backend",
        description:
          "Vaga para desenvolvedor backend com experiência em Node.js",
        sector: "TI",
        location: "São Paulo",
        dataEnd: "2024-10-15",
        benefects: "Vale Transporte, Vale Refeição",
        categoryId: category1.id,
      },
      {
        title: "Especialista em SEO",
        description:
          "Vaga para especialista em otimização de mecanismos de busca",
        sector: "Marketing",
        location: "Rio de Janeiro",
        dataEnd: "2024-09-30",
        benefects: "Plano de Saúde, Home Office",
        categoryId: category2.id,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Dados populados com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
