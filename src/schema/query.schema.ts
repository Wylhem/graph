import {ProfileQuery} from "../Entity/Profile/schema/profile.schema";
import {PersonQuery} from "../Entity/Person/Schema/person.schema";
import {UsersQuery} from "../Entity/Users/Schema/users.schema";
import {ProfessorQuery} from "../Entity/Professor/Schema/professor.schema";
import {EstablishmentQuery} from "../Entity/Establishment/Schema/establishment.schema";
import {StudentQuery} from "../Entity/Student/Schema/student.schema";
import {GroupQuery} from "../Entity/groupes/Schema/groupes.schema";
import {TrainingQuery} from "../Entity/Training/Schema/training.schema";
import {TrainingSessionQuery} from "../Entity/TrainingSession/Schema/training_session.schema";
import {ClassQuery} from "../Entity/Classes/Schema/classes.schema";
import {ClassroomQuery} from "../Entity/Classroom/Schema/classroom.schema";
import {LessonQuery} from "../Entity/Lesson/Schema/lesson.schema";
import {ExamQuery} from "../Entity/Exam/Schema/exam.schema";
import {SubjectQuery} from "../Entity/Subject/Schema/subject.schema";
import {TrainingFamilyQuery} from "../Entity/TrainingFamily/Schema/training_family.schema";
import {AbsenceQuery} from "../Entity/Absence/Schema/absence.schema";

const query: Array<string> = [
    ProfileQuery,
    PersonQuery,
    UsersQuery,
    ProfessorQuery,
    EstablishmentQuery,
    StudentQuery,
    GroupQuery,
    TrainingQuery,
    TrainingSessionQuery,
    ClassQuery,
    ClassroomQuery,
    ExamQuery,
    LessonQuery,
    SubjectQuery,
    TrainingFamilyQuery,
    AbsenceQuery

];


export default query;