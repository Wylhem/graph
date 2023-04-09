import {ProfileResolver} from "../Entity/Profile/profile.resolver";
import {PersonResolver} from "../Entity/Person/person.resolver";
import {UsersResolver} from "../Entity/Users/users.resolver";
import {ProfessorResolver} from "../Entity/Professor/professor.resolver";
import {EstablishmentResolver} from "../Entity/Establishment/establishment.resolver";
import {StudentResolver} from "../Entity/Student/student.resolver";
import {GroupesResolver} from "../Entity/groupes/groupes.resolver";
import {TrainingResolver} from "../Entity/Training/training.resolver";
import {TrainingSessionResolver} from "../Entity/TrainingSession/training_session.resolver";
import {ClassesResolver} from "../Entity/Classes/classes.resolver";
import {ClassroomResolver} from "../Entity/Classroom/classroom.resolver";
import {TrainingFamilyResolver} from "../Entity/TrainingFamily/training_family.resolver";
import {SubjectResolver} from "../Entity/Subject/subject.resolver";
import {LessonResolver} from "../Entity/Lesson/lesson.resolver";
import {AbsenceResolver} from "../Entity/Absence/absence.resolver";
import {ExamResolver} from "../Entity/Exam/exam.resolver";


const resolverSchema = {
    ...ProfileResolver,
    ...PersonResolver,
    ...UsersResolver,
    ...ProfessorResolver,
    ...EstablishmentResolver,
    ...StudentResolver,
    ...GroupesResolver,
    ...TrainingResolver,
    ...TrainingSessionResolver,
    ...ClassesResolver,
    ...ClassroomResolver,
    ...TrainingFamilyResolver,
    ...SubjectResolver,
    ...LessonResolver,
    ...AbsenceResolver,
    ...ExamResolver,
};

export default resolverSchema;