/*
  Warnings:

  - You are about to drop the column `les_end` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `les_schedule` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `les_start` on the `lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "les_end",
DROP COLUMN "les_schedule",
DROP COLUMN "les_start",
ADD COLUMN     "les_scheduleEnd" TIMESTAMP(6),
ADD COLUMN     "les_scheduleStart" TIMESTAMP(6);
