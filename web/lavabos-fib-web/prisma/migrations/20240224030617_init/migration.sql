-- CreateTable
CREATE TABLE "Frase" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "edifici" TEXT NOT NULL,
    "planta" TEXT NOT NULL,
    "sexe" TEXT,

    CONSTRAINT "Frase_pkey" PRIMARY KEY ("id")
);
