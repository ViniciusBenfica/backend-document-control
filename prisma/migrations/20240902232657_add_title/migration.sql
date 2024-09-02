/*
  Warnings:

  - You are about to drop the column `titulo` on the `Document` table. All the data in the column will be lost.
  - Added the required column `title` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "titulo",
ADD COLUMN     "title" TEXT NOT NULL;
