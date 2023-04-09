import {ProfileMutation} from "../Entity/Profile/schema/profile.schema";
import {PersonMutation} from "../Entity/Person/Schema/person.schema";
import {UsersMutation} from "../Entity/Users/Schema/users.schema";
import {ProfessorMutation} from "../Entity/Professor/Schema/professor.schema";
import {EstablishmentMutation} from "../Entity/Establishment/Schema/establishment.schema";
import {StudentMutation} from "../Entity/Student/Schema/student.schema";
import {GroupMutation} from "../Entity/groupes/Schema/groupes.schema";
import {TrainingMutation} from "../Entity/Training/Schema/training.schema";
import {TrainingSessionMutation} from "../Entity/TrainingSession/Schema/training_session.schema";
import {ClassMutation} from "../Entity/Classes/Schema/classes.schema";
import {ClassroomMutation} from "../Entity/Classroom/Schema/classroom.schema";
import {ExamMutation} from "../Entity/Exam/Schema/exam.schema";
import {LessonMutation} from "../Entity/Lesson/Schema/lesson.schema";
import {SubjectMutation} from "../Entity/Subject/Schema/subject.schema";
import {TrainingFamilyMutation} from "../Entity/TrainingFamily/Schema/training_family.schema";
import {AbsenceMutation} from "../Entity/Absence/Schema/absence.schema";

const mutation: Array<string> = [
    ProfileMutation,
    PersonMutation,
    UsersMutation,
    ProfessorMutation,
    EstablishmentMutation,
    StudentMutation,
    GroupMutation,
    TrainingMutation,
    TrainingSessionMutation,
    ClassMutation,
    ClassroomMutation,
    ExamMutation,
    LessonMutation,
    SubjectMutation,
    TrainingFamilyMutation,
    AbsenceMutation,

];

export default mutation;