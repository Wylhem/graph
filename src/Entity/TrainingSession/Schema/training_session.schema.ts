export const TrainingSessionSchema = `
    type TrainingSession{
        id: ID
        publicName: String
        name: String
        entryYear: Int
        endYear: Int
        training: Training
        classes: Class
        subjects: [Subject]
        createdAt: Date
        updatedAt: Date
    }
    input CreateTrainingSession {
        publicName: String
        name: String
        entryYear: Int!
        endYear: Int!
        training: UpdateTraining!
    }
    input UpdateTrainingSession {
        id: ID!
        publicName: String
        name: String
        entryYear: Int
        endYear: Int
        training: UpdateTraining
    }
`
export const TrainingSessionQuery = `
    trainingSessions: [TrainingSession]
    trainingSession(id: ID!): TrainingSession
`
export const TrainingSessionMutation = `
    addTrainingSession(trainingSession: CreateTrainingSession ): TrainingSession
    addSubjectTrainingSession(subjects: [UpdateSubject]!, trainingSession: UpdateTrainingSession!): TrainingSession
    removeSubjectTrainingSession(subjects: [UpdateSubject]!, trainingSession: UpdateTrainingSession!): TrainingSession
    updateTrainingSession(trainingSession: UpdateTrainingSession ): TrainingSession
    deleteTrainingSession(id: ID!): Boolean
`