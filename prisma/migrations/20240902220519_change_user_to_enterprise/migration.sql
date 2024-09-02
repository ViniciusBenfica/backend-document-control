/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnDocument" DROP CONSTRAINT "UserOnDocument_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnDocument" DROP CONSTRAINT "UserOnDocument_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserOnDocument";

-- CreateTable
CREATE TABLE "Enterprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnterpriseOnDocument" (
    "id" TEXT NOT NULL,
    "enterpriseId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnterpriseOnDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_name_key" ON "Enterprise"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_cnpj_key" ON "Enterprise"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "EnterpriseOnDocument_enterpriseId_documentId_key" ON "EnterpriseOnDocument"("enterpriseId", "documentId");

-- AddForeignKey
ALTER TABLE "EnterpriseOnDocument" ADD CONSTRAINT "EnterpriseOnDocument_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnterpriseOnDocument" ADD CONSTRAINT "EnterpriseOnDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
