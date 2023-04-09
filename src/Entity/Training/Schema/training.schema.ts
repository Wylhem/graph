export const TrainingSchema = `
    type Training {
        id: ID!
        publicName: String
        name: String
        establishment: Establishment
        trainingSession: [TrainingSession]
        trainingFamily: TrainingFamily
        createdAt: Date
        updatedAt: Date
    }
    
    input CreateTraining {
        publicName: String
        name: String
        establishment: UpdateEstablishment!
        trainingFamily: UpdateTrainingFamily!
    }
    input UpdateTraining {
        id: ID!
        publicName: String
        name: String
        establishment: UpdateEstablishment
        trainingFamily: UpdateTrainingFamily
    }
`
export const TrainingQuery = `
    trainings: [Training]
    training(id: ID!): Training
`
export const TrainingMutation = `
    addTraining(training: CreateTraining): Training
    updateTraining(training: UpdateTraining): Training
    deleteTraining(id: ID!): Boolean
`
