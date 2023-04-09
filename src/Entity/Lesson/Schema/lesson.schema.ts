export const LessonSchema = `
    type Lesson {
        id: ID!
        scheduleStart: Date
        scheduleEnd: Date
        subject: Subject
        professor: Professor
        groups: Group
        absences: [Absence]
        classroom: Classroom
        createdAt: Date
        updatedAt: Date
    }
    input CreateLesson {
        scheduleStart: Date!
        scheduleEnd: Date!
        subject: UpdateSubject!
        professor: UpdateProfessor
        groups: UpdateGroup!
        classroom: UpdateClassroom! 
    }
    input UpdateLesson {
        id: ID!
        scheduleStart: Date
        scheduleEnd: Date
        subject: UpdateSubject
        groups: UpdateGroup
        classroom: UpdateClassroom 
    }
`
export const LessonQuery = `
    lessons: [Lesson]
    lesson(id: ID!): Lesson
    nextLessons(student: UpdateStudent!): [Lesson]
`
export const LessonMutation = `
    addLesson(lesson: CreateLesson!): Lesson
    updateLesson(lesson: UpdateLesson!): Lesson
    deleteLesson(id: ID!): Boolean
`