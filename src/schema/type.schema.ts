import {ProfileSchema} from "../Entity/Profile/schema/profile.schema";
import {PersonSchema} from "../Entity/Person/Schema/person.schema";
import {UsersSchema} from "../Entity/Users/Schema/users.schema";
import {ProfessorSchema} from "../Entity/Professor/Schema/professor.schema";
import {EstablishmentSchema} from "../Entity/Establishment/Schema/establishment.schema";
import {StudentSchema} from "../Entity/Student/Schema/student.schema";
import {GroupesSchema} from "../Entity/groupes/Schema/groupes.schema";
import {TrainingSchema} from "../Entity/Training/Schema/training.schema";
import {TrainingSessionSchema} from "../Entity/TrainingSession/Schema/training_session.schema";
import {ClassSchema} from "../Entity/Classes/Schema/classes.schema";
import {ClassroomSchema} from "../Entity/Classroom/Schema/classroom.schema";
import {ExamSchema} from "../Entity/Exam/Schema/exam.schema";
import {LessonSchema} from "../Entity/Lesson/Schema/lesson.schema";
import {SubjectSchema} from "../Entity/Subject/Schema/subject.schema";
import {TrainingFamilySchema} from "../Entity/TrainingFamily/Schema/training_family.schema";
import {AbsenceSchema} from "../Entity/Absence/Schema/absence.schema";

const type: Array<string> = [
    ProfileSchema,
    PersonSchema,
    UsersSchema,
    ProfessorSchema,
    EstablishmentSchema,
    StudentSchema,
    GroupesSchema,
    TrainingSchema,
    TrainingSessionSchema,
    ClassSchema,
    ClassroomSchema,
    ExamSchema,
    LessonSchema,
    SubjectSchema,
    TrainingFamilySchema,
    AbsenceSchema
];

export default type;