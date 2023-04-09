-- CreateTable
CREATE TABLE "classes" (
    "cls_id" SERIAL NOT NULL,
    "cls_label" VARCHAR,
    "cls_trainingsession" INTEGER,
    "cls_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cls_updatedat" TIMESTAMP(6),

    CONSTRAINT "classes_pkey" PRIMARY KEY ("cls_id")
);

-- CreateTable
CREATE TABLE "classroom" (
    "clr_id" SERIAL NOT NULL,
    "clr_label" VARCHAR,
    "clr_establishment" INTEGER,
    "clr_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cls_updatedat" TIMESTAMP(6),

    CONSTRAINT "classroom_pkey" PRIMARY KEY ("clr_id")
);

-- CreateTable
CREATE TABLE "establishment" (
    "est_id" SERIAL NOT NULL,
    "est_publicname" VARCHAR,
    "est_name" VARCHAR,
    "est_address" VARCHAR,
    "est_parentsite" INTEGER,
    "est_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "est_updatedat" TIMESTAMP(6),

    CONSTRAINT "unique_est_id" PRIMARY KEY ("est_id")
);

-- CreateTable
CREATE TABLE "exam" (
    "exm_id" SERIAL NOT NULL,
    "exm_grade" INTEGER,
    "exm_date" TIMESTAMP(6),
    "exm_student" INTEGER NOT NULL,
    "exm_professor" INTEGER NOT NULL,
    "exm_subject" INTEGER NOT NULL,
    "exm_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "exm_updatedat" TIMESTAMP(6),

    CONSTRAINT "exam_pkey" PRIMARY KEY ("exm_id")
);

-- CreateTable
CREATE TABLE "groupes" (
    "grp_id" SERIAL NOT NULL,
    "grp_label" VARCHAR,
    "grp_classes" INTEGER,
    "cls_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cls_updatedat" TIMESTAMP(6),

    CONSTRAINT "groupes_pkey" PRIMARY KEY ("grp_id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "les_id" SERIAL NOT NULL,
    "les_schedule" TIMESTAMP(6),
    "les_subject" INTEGER,
    "les_professor" INTEGER,
    "les_groupes" INTEGER,
    "les_classroom" INTEGER,
    "les_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "les_updatedat" TIMESTAMP(6),

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("les_id")
);

-- CreateTable
CREATE TABLE "person" (
    "per_id" SERIAL NOT NULL,
    "per_firstname" VARCHAR,
    "per_lastname" VARCHAR,
    "per_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "per_updatedat" TIMESTAMP(6),

    CONSTRAINT "person_pkey" PRIMARY KEY ("per_id")
);

-- CreateTable
CREATE TABLE "professor" (
    "pro_id" SERIAL NOT NULL,
    "pro_person" INTEGER,
    "pro_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "pro_updatedat" TIMESTAMP(6),

    CONSTRAINT "professor_pkey" PRIMARY KEY ("pro_id")
);

-- CreateTable
CREATE TABLE "profile" (
    "prf_id" SERIAL NOT NULL,
    "prf_label" VARCHAR,
    "prf_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "prf_updatedat" TIMESTAMP(6),

    CONSTRAINT "profile_pkey" PRIMARY KEY ("prf_id")
);

-- CreateTable
CREATE TABLE "student" (
    "std_id" SERIAL NOT NULL,
    "std_isineu" BOOLEAN,
    "std_disability" BOOLEAN,
    "std_scholarship" BOOLEAN,
    "std_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "std_updatedat" TIMESTAMP(6),
    "std_person" INTEGER,
    "std_groupes" INTEGER,

    CONSTRAINT "student_pkey" PRIMARY KEY ("std_id")
);

-- CreateTable
CREATE TABLE "subject" (
    "sub_id" SERIAL NOT NULL,
    "sub_label" VARCHAR,
    "sub_trainingsession" INTEGER,
    "sub_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "sub_updatedat" TIMESTAMP(6),

    CONSTRAINT "subject_pkey" PRIMARY KEY ("sub_id")
);

-- CreateTable
CREATE TABLE "training" (
    "tra_id" SERIAL NOT NULL,
    "tra_publicname" VARCHAR,
    "tra_name" VARCHAR,
    "tra_establishment" INTEGER,
    "tra_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "tra_updatedat" TIMESTAMP(6),

    CONSTRAINT "training_pkey" PRIMARY KEY ("tra_id")
);

-- CreateTable
CREATE TABLE "training_session" (
    "trs_id" SERIAL NOT NULL,
    "trs_publicname" VARCHAR,
    "trs_name" VARCHAR,
    "trs_entryyear" INTEGER,
    "trs_endyear" INTEGER,
    "trs_training" INTEGER,
    "trs_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "trs_updatedat" TIMESTAMP(6),

    CONSTRAINT "training_session_pkey" PRIMARY KEY ("trs_id")
);

-- CreateTable
CREATE TABLE "users" (
    "usr_id" SERIAL NOT NULL,
    "usr_email" VARCHAR NOT NULL,
    "usr_createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "usr_updatedat" TIMESTAMP(6),
    "usr_person" INTEGER,
    "usr_profile" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("usr_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_usr_email_key" ON "users"("usr_email");

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_trainingsession_fk" FOREIGN KEY ("cls_trainingsession") REFERENCES "training_session"("trs_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "classroom" ADD CONSTRAINT "classroom_establishment_fk" FOREIGN KEY ("clr_establishment") REFERENCES "establishment"("est_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "establishment" ADD CONSTRAINT "establishment_parent_site" FOREIGN KEY ("est_parentsite") REFERENCES "establishment"("est_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exam" ADD CONSTRAINT "exam_professor_fk" FOREIGN KEY ("exm_professor") REFERENCES "professor"("pro_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exam" ADD CONSTRAINT "exam_student_fk" FOREIGN KEY ("exm_student") REFERENCES "student"("std_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exam" ADD CONSTRAINT "exam_subject_fk" FOREIGN KEY ("exm_subject") REFERENCES "subject"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "groupes" ADD CONSTRAINT "groupes_class_fk" FOREIGN KEY ("grp_classes") REFERENCES "classes"("cls_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_classroom_fk" FOREIGN KEY ("les_classroom") REFERENCES "classroom"("clr_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_group_fk" FOREIGN KEY ("les_groupes") REFERENCES "groupes"("grp_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_professor_fk" FOREIGN KEY ("les_professor") REFERENCES "professor"("pro_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_subject_fk" FOREIGN KEY ("les_subject") REFERENCES "subject"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_person_fk" FOREIGN KEY ("pro_person") REFERENCES "person"("per_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_group" FOREIGN KEY ("std_groupes") REFERENCES "groupes"("grp_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_person_fk" FOREIGN KEY ("std_person") REFERENCES "person"("per_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_training_fk" FOREIGN KEY ("sub_trainingsession") REFERENCES "training_session"("trs_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_establishment_fk" FOREIGN KEY ("tra_establishment") REFERENCES "establishment"("est_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "training_session" ADD CONSTRAINT "training_session_training_fk" FOREIGN KEY ("trs_training") REFERENCES "training"("tra_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_person_fk" FOREIGN KEY ("usr_person") REFERENCES "person"("per_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_profile_fk" FOREIGN KEY ("usr_profile") REFERENCES "profile"("prf_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
