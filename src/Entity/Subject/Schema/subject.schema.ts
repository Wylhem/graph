export const SubjectSchema = `
    type Subject {
        id: ID!
        label: String
        trainingSession: TrainingSession
        createdAt: Date
        updatedAt: Date
        exams: [Exam]
        lessons: [Lesson] 
    }
    input CreateSubject {
        label: String!
        trainingSession: UpdateTrainingSession!
    }
    input UpdateSubject {
        id: ID!
        label: String
        trainingSession: UpdateTrainingSession
    }
`
export const SubjectQuery = `
    subjects: [Subject]
    subject(id: ID!): Subject 
`
export const SubjectMutation = `
    addSubject(subject: CreateSubject!): Subject 
    updateSubject(subject: UpdateSubject!): Subject
    deleteSubject(id: ID!):Boolean
`