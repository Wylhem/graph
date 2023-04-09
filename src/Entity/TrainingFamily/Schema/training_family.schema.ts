export const TrainingFamilySchema = `
    type TrainingFamily {
        id: ID
        label: String
        trainings: [Training]
        createdAt: Date
        updatedAt: Date 
    }
    
    input CreateTrainingFamily {
        label: String!
    }
    input UpdateTrainingFamily {
        id: ID!
        label: String
    }
`
export const TrainingFamilyQuery = `
    trainingFamilies: [TrainingFamily]
    trainingFamily(id: ID!): TrainingFamily
`
export const TrainingFamilyMutation = `
    addTrainingFamily(trainingFamily: CreateTrainingFamily! ): TrainingFamily
    updateTrainingFamily(trainingFamily: UpdateTrainingFamily!): TrainingFamily
    deleteTrainingFamily(id: ID!): Boolean
`
