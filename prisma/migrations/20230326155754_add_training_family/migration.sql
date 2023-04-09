-- AlterTable
ALTER TABLE "training" ADD COLUMN     "tra_trainingfamily" INTEGER;

-- CreateTable
CREATE TABLE "training_family" (
    "trf_id" SERIAL NOT NULL,
    "trf_label" TEXT,
    "trf_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "trf_updatedat" TIMESTAMP(6),

    CONSTRAINT "training_family_pkey" PRIMARY KEY ("trf_id")
);

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_tra_trainingfamily_fkey" FOREIGN KEY ("tra_trainingfamily") REFERENCES "training_family"("trf_id") ON DELETE SET NULL ON UPDATE CASCADE;
