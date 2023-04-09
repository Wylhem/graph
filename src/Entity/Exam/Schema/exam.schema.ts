export const ExamSchema = `
    type Exam {
        id: ID
        grade: Int
        date: Date
        student: Student
        subject: Subject
        professor: Professor
        createdAt: Date
        updatedAt: Date
    }
    input CreateExam {
        grade: Int
        date: Date
        student: UpdateStudent!
        subject: UpdateSubject!
        professor: UpdateProfessor!
    }
    input UpdateExam {
        id: ID!
        grade: Int
        date: Date
        student: UpdateStudent
        subject: UpdateSubject
        professor: UpdateProfessor
    }
`
export const ExamQuery = `
    exams: [Exam]
    exam(id: ID!): Exam
`
export const ExamMutation = `
    addExam(exam: CreateExam): Exam
    updateExam(exam: UpdateExam): Exam
    deleteExam(id: ID!): Boolean
`