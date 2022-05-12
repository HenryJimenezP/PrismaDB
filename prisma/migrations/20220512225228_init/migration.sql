/*
  Warnings:

  - You are about to drop the column `hasCertification` on the `missionCommander` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "missionCommander" DROP COLUMN "hasCertification",
ADD COLUMN     "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false;
