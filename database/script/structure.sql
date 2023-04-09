-- CREATE Tables
CREATE TABLE IF NOT EXISTS users (
    usr_id serial primary key,
    usr_email CHARACTER varying not null unique,
    usr_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    usr_updatedAt TIMESTAMP WITHOUT TIME ZONE,

    usr_person INTEGER,
    usr_profile INTEGER
);

CREATE TABLE IF NOT EXISTS person (
    per_id serial primary key ,
    per_firstname CHARACTER VARYING,
    per_lastname CHARACTER VARYING,
    per_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    per_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS profile (
    prf_id serial primary key,
    prf_label CHARACTER VARYING,
    prf_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT  CURRENT_TIMESTAMP,
    prf_updatedAt TIMESTAMP WITHOUT TIME ZONE
);
CREATE TABLE IF NOT EXISTS student (
  std_id serial primary key,
  std_isInEu boolean,
  std_disability boolean,
  std_scholarship boolean,
  std_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  std_updatedAt TIMESTAMP WITHOUT TIME ZONE,
  std_person INTEGER,
  std_groupes INTEGER
);
CREATE TABLE IF NOT EXISTS professor (
    pro_id serial primary key,
    pro_person INTEGER,
    pro_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    pro_updatedAt TIMESTAMP WITHOUT TIME ZONE
);
CREATE TABLE IF NOT EXISTS exam (
    exm_id serial primary key,
    exm_grade INTEGER,
    exm_date TIMESTAMP WITHOUT TIME ZONE,
    exm_student integer not null,
    exm_professor integer not null,
    exm_subject integer not null,
    exm_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    exm_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS subject (
    sub_id serial primary key,
    sub_label CHARACTER VARYING,
    sub_trainingSession integer,
    sub_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    sub_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE if not exists establishment (
    est_id serial primary key,
    est_publicName CHARACTER VARYING,
    est_name CHARACTER VARYING,
    est_address CHARACTER VARYING,
    est_parentSite INTEGER,
    est_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    est_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS training (
    tra_id serial primary key,
    tra_publicName CHARACTER VARYING,
    tra_name CHARACTER VARYING,
    tra_establishment INTEGER,
    tra_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    tra_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS training_session (
    trs_id serial primary key,
    trs_publicName CHARACTER VARYING,
    trs_name CHARACTER VARYING,
    trs_entryYear INTEGER,
    trs_endYear INTEGER,
    trs_training INTEGER,
    trs_createdAt TIMESTAMP WITHOUT TIME ZONE default CURRENT_TIMESTAMP,
    trs_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS lesson (
    les_id serial primary key,
    les_schedule TIMESTAMP WITHOUT TIME ZONE,
    les_subject INTEGER,
    les_professor INTEGER,
    les_groupes INTEGER,
    les_classroom INTEGER,
    les_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    les_updatedAt TIMESTAMP without time zone
);

CREATE TABLE IF NOT EXISTS classes (
    cls_id serial primary key,
    cls_label CHARACTER VARYING,
    cls_trainingSession INTEGER,
    cls_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    cls_updatedAt TIMESTAMP without time zone
);

CREATE TABLE IF NOT EXISTS groupes (
    grp_id serial primary key,
    grp_label CHARACTER VARYING,
    grp_classes INTEGER,
    cls_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT  CURRENT_TIMESTAMP,
    cls_updatedAt TIMESTAMP WITHOUT TIME ZONE

);

CREATE TABLE IF NOT EXISTS classroom (
    clr_id serial primary key,
    clr_label CHARACTER VARYING,
    clr_establishment INTEGER,
    clr_createdAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    cls_updatedAt TIMESTAMP WITHOUT TIME ZONE
);

--ADD CONSTRAINT
ALTER TABLE IF EXISTS users
    ADD CONSTRAINT users_person_fk FOREIGN KEY (usr_person)
    REFERENCES person(per_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE  IF EXISTS users
    ADD CONSTRAINT users_profile_fk FOREIGN KEY (usr_profile)
    REFERENCES profile(prf_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS student
    ADD CONSTRAINT student_person_fk FOREIGN KEY (std_person)
    REFERENCES person(per_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS student
    ADD CONSTRAINT student_group FOREIGN KEY (std_groupes)
    REFERENCES groupes(grp_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS professor
    ADD constraint professor_person_fk FOREIGN KEY (pro_person)
    REFERENCES person (per_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS exam
    ADD CONSTRAINT exam_student_fk FOREIGN KEY (exm_student)
    REFERENCES student (std_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS exam
    ADD CONSTRAINT exam_professor_fk FOREIGN KEY (exm_professor)
    REFERENCES professor (pro_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS exam
    ADD CONSTRAINT exam_subject_fk FOREIGN KEY (exm_subject)
    REFERENCES subject (sub_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE establishment
    ADD CONSTRAINT unique_est_id UNIQUE (est_id);

ALTER TABLE IF EXISTS establishment
    ADD CONSTRAINT establishment_parent_site FOREIGN KEY (est_parentSite)
    REFERENCES establishment (est_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS training
    ADD CONSTRAINT  training_establishment_fk FOREIGN KEY (tra_establishment)
    REFERENCES establishment (est_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS training_session
    ADD CONSTRAINT training_session_training_fk FOREIGN KEY (trs_training)
    REFERENCES training (tra_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS subject
    ADD CONSTRAINT subject_training_fk FOREIGN KEY (sub_trainingSession)
    REFERENCES training_session (trs_id)
    ON UPDATE NO ACTION
    ON DELETE  NO ACTION;
ALTER TABLE IF EXISTS lesson
    add constraint lesson_subject_fk FOREIGN KEY (les_subject)
    REFERENCES subject (sub_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION ;
ALTER TABLE IF EXISTS lesson
    ADD CONSTRAINT lesson_professor_fk FOREIGN KEY (les_professor)
    REFERENCES professor (pro_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS lesson
    ADD CONSTRAINT lesson_group_fk FOREIGN KEY (les_groupes)
    REFERENCES groupes (grp_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS lesson
    ADD CONSTRAINT lesson_classroom_fk FOREIGN KEY (les_classroom)
    REFERENCES classroom (clr_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS classes
    ADD CONSTRAINT classes_trainingSession_fk FOREIGN KEY (cls_trainingSession)
    REFERENCES training_session (trs_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS classroom
    ADD CONSTRAINT classroom_establishment_fk FOREIGN KEY (clr_establishment)
    REFERENCES establishment (est_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
ALTER TABLE IF EXISTS groupes
    ADD CONSTRAINT groupes_class_fk FOREIGN KEY (grp_classes)
    REFERENCES classes (cls_id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
