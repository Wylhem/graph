-- CreateTable
CREATE TABLE "attendance" (
    "att_id" SERIAL NOT NULL,
    "att_assistance" BOOLEAN NOT NULL,
    "att_student" INTEGER,
    "att_lesson" INTEGER,
    "att_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "att_updatedat" TIMESTAMP(6),

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("att_id")
);

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_att_lesson_fkey" FOREIGN KEY ("att_lesson") REFERENCES "lesson"("les_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_att_student_fkey" FOREIGN KEY ("att_student") REFERENCES "student"("std_id") ON DELETE SET NULL ON UPDATE CASCADE;
