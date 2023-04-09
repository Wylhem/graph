INSERT INTO profile(prf_label)
VALUES ('ADMIN');
INSERT INTO profile(prf_label)
VALUES ('STUDENT');
INSERT INTO profile(prf_label)
VALUES ('PROFESSOR');


INSERT INTO person (per_firstname, per_lastname)
VALUES ('TEST', 'ADMIN'),
       ('Burke', 'Hammond'),
       ('Xantha', 'Wallace'),
       ('Heather', 'Mccormick'),
       ('Thor', 'Weeks'),
       ('Isabelle', 'Mcbride'),
       ('Zelda', 'Fitzpatrick'),
       ('Daphne', 'Kent'),
       ('Stewart', 'Mcintosh'),
       ('Mira', 'Dodson'),
       ('Ishmael', 'Osborn');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Malachi', 'Finley'),
       ('Ingrid', 'Macdonald'),
       ('Libby', 'May'),
       ('Tamekah', 'Burt'),
       ('Reuben', 'Pratt'),
       ('Charles', 'Stanley'),
       ('Leilani', 'Taylor'),
       ('Jessamine', 'Hammond'),
       ('Victor', 'Page'),
       ('Lenore', 'Salazar');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Lana', 'Wooten'),
       ('Chaney', 'Church'),
       ('Sybil', 'Browning'),
       ('Lacota', 'Clark'),
       ('Murphy', 'Wilson'),
       ('Kirsten', 'Sloan'),
       ('Lucas', 'Howell'),
       ('Shannon', 'Acevedo'),
       ('Alana', 'Klein'),
       ('Dylan', 'Saunders');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Patience', 'Mccarty'),
       ('Kareem', 'Webster'),
       ('Clark', 'Mcgee'),
       ('Tyrone', 'Cote'),
       ('Connor', 'Case'),
       ('Juliet', 'Campos'),
       ('Avram', 'Austin'),
       ('Karen', 'Shannon'),
       ('Constance', 'Craft'),
       ('Tobias', 'Horton');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Marny', 'Wynn'),
       ('Ruby', 'Barrera'),
       ('Yetta', 'Lawson'),
       ('Malachi', 'Mullen'),
       ('Brady', 'Walls'),
       ('Dillon', 'Mcneil'),
       ('Cedric', 'Burris'),
       ('Nicholas', 'Gomez'),
       ('Thomas', 'Dunn'),
       ('Kato', 'Cummings');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Malachi', 'Hoffman'),
       ('Uta', 'Medina'),
       ('Indira', 'Marks'),
       ('Xyla', 'Mckay'),
       ('Joel', 'Leach'),
       ('Palmer', 'Whitaker'),
       ('Jeremy', 'Riggs'),
       ('Jameson', 'Brewer'),
       ('Dominique', 'Jackson'),
       ('Jade', 'Lynn');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Shad', 'Le'),
       ('Rhona', 'Vaughan'),
       ('Ryan', 'Byers'),
       ('Leah', 'Fowler'),
       ('Barclay', 'Ross'),
       ('Leo', 'Leblanc'),
       ('Dorothy', 'Golden'),
       ('Aurelia', 'Benton'),
       ('Ira', 'Landry'),
       ('Rahim', 'Vega');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Quynn', 'Humphrey'),
       ('Ulric', 'Goff'),
       ('Gareth', 'Torres'),
       ('Kenneth', 'Robertson'),
       ('Quyn', 'Horton'),
       ('Donovan', 'Mccormick'),
       ('Neville', 'Gordon'),
       ('Julian', 'Harvey'),
       ('Kareem', 'Mccormick'),
       ('Sonya', 'Leach');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Mia', 'Gibbs'),
       ('Ulysses', 'Lucas'),
       ('Erasmus', 'Nguyen'),
       ('Quyn', 'Hale'),
       ('Maxwell', 'Blankenship'),
       ('Darius', 'Snyder'),
       ('Bryar', 'Trujillo'),
       ('Prescott', 'Juarez'),
       ('Sydney', 'Sandoval'),
       ('Nadine', 'Orr');
INSERT INTO person (per_firstname, per_lastname)
VALUES ('Justina', 'Herman'),
       ('Ella', 'Duncan'),
       ('Diana', 'Holmes'),
       ('Wing', 'Hoffman'),
       ('Wyatt', 'Gonzalez'),
       ('Felix', 'Pitts'),
       ('Evelyn', 'Conley'),
       ('Hayley', 'Spears'),
       ('Mara', 'Horton'),
       ('Ori', 'Schneider');

INSERT INTO users (usr_email, usr_person, usr_profile)
VALUES ('test.test@test.fr', 1, 1),
       ('dis.parturient.montes@icloud.ca', 2, 2),
       ('faucibus.orci@icloud.couk', 3, 2),
       ('adipiscing@yahoo.net', 4, 2),
       ('senectus.et@hotmail.couk', 5, 2),
       ('posuere.enim@aol.edu', 6, 2),
       ('ante.maecenas@outlook.com', 7, 2),
       ('aliquam@aol.ca', 8, 2),
       ('elit.sed.consequat@outlook.com', 9, 2),
       ('dapibus.gravida@yahoo.couk', 10, 2),
       ('ultrices.iaculis@aol.net', 11, 2);
INSERT INTO users (usr_email, usr_person, usr_profile)
VALUES ('tortor.at@outlook.org', 12, 2),
       ('nonummy.ac.feugiat@hotmail.edu', 13, 2),
       ('ipsum.curabitur@google.com', 14, 2),
       ('ut.quam@outlook.net', 15, 2),
       ('phasellus.libero@outlook.net', 16, 2),
       ('at.nisi@protonmail.net', 17, 2),
       ('quis.pede.suspendisse@aol.com', 18, 2),
       ('semper.pretium@google.couk', 19, 2),
       ('sed.nulla.ante@yahoo.com', 20, 2),
       ('duis.ac.arcu@hotmail.edu', 21, 2);
INSERT INTO users (usr_email, usr_person, usr_profile)
VALUES ('curabitur.sed.tortor@outlook.net', 22, 2),
       ('felis.adipiscing@outlook.org', 23, 2),
       ('non@aol.couk', 24, 2),
       ('dictum.magna@yahoo.org', 25, 2),
       ('nam@aol.ca', 26, 2),
       ('pede.nonummy@yahoo.net', 27, 2),
       ('diam.nunc@outlook.net', 28, 2),
       ('ut.odio.vel@google.net', 29, 2),
       ('ipsum@aol.edu', 30, 2),
       ('fringilla.est@icloud.couk', 31, 2);
INSERT INTO users (usr_email, usr_person, usr_profile)
VALUES ('phasellus@aol.ca', 32, 2),
       ('fusce.mollis@hotmail.com', 33, 2),
       ('aliquam.enim@outlook.net', 34, 2),
       ('arcu@yahoo.com', 35, 2),
       ('tortor.nibh@protonmail.com', 36, 2),
       ('mauris@aol.net', 37, 2),
       ('donec.porttitor.tellus@aol.edu', 38, 2),
       ('nisi.a@icloud.edu', 39, 2),
       ('orci.phasellus@outlook.edu', 40, 2),
       ('suscipit.nonummy.fusce@hotmail.ca', 41, 2);
INSERT INTO users (usr_email, usr_person, usr_profile)
VALUES ('donec.luctus@aol.edu', 42, 2),
       ('morbi.accumsan@outlook.org', 43, 2),
       ('vivamus@google.net', 44, 2),
       ('mi.fringilla.mi@google.edu', 45, 2),
       ('eget.massa@yahoo.com', 46, 2),
       ('ut.nec@aol.org', 47, 2),
       ('mauris@aol.ca', 48, 2),
       ('erat.eget@hotmail.edu', 49, 2),
       ('cras.convallis.convallis@protonmail.ca', 50, 2),
       ('fermentum.fermentum@hotmail.com', 51, 2);

INSERT INTO student (std_isineu, std_disability, std_scholarship, std_person)
VALUES ('true', 'true', 'false', 2),
       ('false', 'true', 'false', 3),
       ('true', 'false', 'false', 4),
       ('false', 'false', 'false', 5),
       ('false', 'true', 'false', 6),
       ('true', 'false', 'true', 7),
       ('false', 'false', 'false', 8),
       ('false', 'false', 'false', 9),
       ('false', 'false', 'false', 10),
       ('false', 'false', 'true', 11);
INSERT INTO student (std_isineu, std_disability, std_scholarship, std_person)
VALUES ('true', 'false', 'true', 12),
       ('true', 'true', 'true', 13),
       ('true', 'false', 'false', 14),
       ('true', 'false', 'true', 15),
       ('true', 'true', 'true', 16),
       ('true', 'true', 'true', 17),
       ('false', 'true', 'true', 18),
       ('false', 'false', 'false', 19),
       ('true', 'true', 'true', 20),
       ('false', 'true', 'false', 21);
INSERT INTO student (std_isineu, std_disability, std_scholarship, std_person)
VALUES ('true', 'true', 'true', 22),
       ('true', 'true', 'false', 23),
       ('true', 'false', 'true', 24),
       ('false', 'false', 'false', 25),
       ('false', 'false', 'false', 26),
       ('false', 'false', 'true', 27),
       ('false', 'false', 'false', 28),
       ('false', 'false', 'true', 29),
       ('true', 'true', 'false', 30),
       ('false', 'true', 'false', 31);
INSERT INTO student (std_isineu, std_disability, std_scholarship, std_person)
VALUES ('true', 'false', 'false', 32),
       ('false', 'true', 'true', 33),
       ('true', 'false', 'false', 34),
       ('false', 'false', 'false', 35),
       ('false', 'false', 'false', 36),
       ('false', 'false', 'false', 37),
       ('true', 'false', 'false', 38),
       ('true', 'false', 'false', 39),
       ('false', 'false', 'false', 40),
       ('true', 'false', 'true', 41);
INSERT INTO student (std_isineu, std_disability, std_scholarship, std_person)
VALUES ('true', 'false', 'true', 42),
       ('false', 'false', 'false', 43),
       ('false', 'false', 'true', 44),
       ('false', 'true', 'false', 45),
       ('true', 'true', 'false', 46),
       ('false', 'false', 'true', 47),
       ('true', 'false', 'false', 48),
       ('true', 'true', 'false', 49),
       ('true', 'true', 'true', 50);

INSERT INTO professor (pro_person)
VALUES (51),
       (52),
       (53),
       (54),
       (55),
       (56),
       (57),
       (58),
       (59),
       (60);
INSERT INTO professor (pro_person)
VALUES (61),
       (62),
       (63),
       (64),
       (65),
       (66),
       (67),
       (68),
       (69),
       (70);
INSERT INTO professor (pro_person)
VALUES (71),
       (72),
       (73),
       (74),
       (75),
       (76),
       (77),
       (78),
       (79),
       (80);
INSERT INTO professor (pro_person)
VALUES (81),
       (82),
       (83),
       (84),
       (85),
       (86),
       (87),
       (88),
       (89),
       (90);
INSERT INTO professor (pro_person)
VALUES (91),
       (92),
       (93),
       (94),
       (95),
       (96),
       (97),
       (98),
       (99),
       (100);

INSERT INTO establishment (est_publicname, est_name, est_address)
VALUES ('et malesuada', 'Suspendisse', 'P.O. Box 610, 2667 Vulputate, Rd.'),
       ('mauris sapien,', 'euismod ac, fermentum', 'Ap #242-6242 Suspendisse Street'),
       ('adipiscing non, luctus sit', 'in faucibus orci luctus', 'Ap #520-5990 Ornare, Road');

INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('sem,', 2),
       ('natoque', 1),
       ('purus', 2),
       ('lorem', 2),
       ('Quisque', 1),
       ('odio', 1),
       ('congue,', 2),
       ('nec', 2),
       ('arcu.', 2),
       ('justo.', 1);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('porttitor', 1),
       ('Fusce', 1),
       ('vel', 2),
       ('Cras', 2),
       ('diam', 2),
       ('eu', 3),
       ('mauris', 2),
       ('fringilla', 1),
       ('rhoncus', 1),
       ('Duis', 3);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('ipsum.', 2),
       ('non,', 3),
       ('magna.', 3),
       ('egestas', 3),
       ('nulla', 1),
       ('Fusce', 2),
       ('at,', 2),
       ('justo.', 1),
       ('metus', 2),
       ('dis', 2);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('Lorem', 3),
       ('urna,', 1),
       ('adipiscing.', 2),
       ('Aliquam', 2),
       ('Fusce', 3),
       ('Cras', 2),
       ('enim', 3),
       ('posuere', 3),
       ('nec', 2),
       ('neque', 2);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('enim,', 3),
       ('sapien.', 2),
       ('mollis.', 3),
       ('aliquet', 1),
       ('nec,', 3),
       ('amet', 3),
       ('In', 2),
       ('Maecenas', 3),
       ('Nulla', 3),
       ('sodales', 2);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('ut', 1),
       ('tincidunt', 2),
       ('massa', 1),
       ('leo.', 3),
       ('Nullam', 2),
       ('amet,', 1),
       ('at,', 2),
       ('neque.', 3),
       ('vulputate', 2),
       ('orci,', 3);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('massa', 2),
       ('elit,', 3),
       ('convallis', 1),
       ('euismod', 1),
       ('In', 2),
       ('sodales', 2),
       ('ornare', 2),
       ('primis', 2),
       ('ornare,', 1),
       ('primis', 1);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('aliquet', 1),
       ('et', 1),
       ('non,', 1),
       ('libero', 3),
       ('molestie', 2),
       ('adipiscing', 2),
       ('et', 3),
       ('Nunc', 2),
       ('Quisque', 3),
       ('vitae', 2);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('Suspendisse', 2),
       ('mauris.', 2),
       ('bibendum', 2),
       ('sollicitudin', 2),
       ('Aliquam', 2),
       ('urna.', 1),
       ('Nunc', 2),
       ('velit.', 1),
       ('vitae', 2),
       ('urna.', 3);
INSERT INTO classroom (clr_label, clr_establishment)
VALUES ('nonummy.', 3),
       ('at', 1),
       ('nonummy', 3),
       ('amet,', 2),
       ('condimentum.', 2),
       ('eleifend', 3),
       ('eleifend', 2),
       ('scelerisque', 2),
       ('gravida', 2),
       ('Maecenas', 1);
