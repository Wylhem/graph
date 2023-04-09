/*
  Warnings:

  - You are about to drop the `attendance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_att_lesson_fkey";

-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_att_student_fkey";

-- DropTable
DROP TABLE "attendance";

-- CreateTable
CREATE TABLE "absence" (
    "abs_id" SERIAL NOT NULL,
    "abs_student" INTEGER,
    "abs_lesson" INTEGER,
    "abs_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "abs_updatedat" TIMESTAMP(6),

    CONSTRAINT "absence_pkey" PRIMARY KEY ("abs_id")
);

-- AddForeignKey
ALTER TABLE "absence" ADD CONSTRAINT "absence_abs_lesson_fkey" FOREIGN KEY ("abs_lesson") REFERENCES "lesson"("les_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "absence" ADD CONSTRAINT "absence_abs_student_fkey" FOREIGN KEY ("abs_student") REFERENCES "student"("std_id") ON DELETE SET NULL ON UPDATE CASCADE;
