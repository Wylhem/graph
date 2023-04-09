export const ClassSchema = `
    type Class {
        id: ID!
        label: String
        trainingSession: TrainingSession
        groups: [Group]
        createdAt: Date
        updatedAt: Date
    }
    input CreateClass {
        label: String
        trainingSession: UpdateTrainingSession!
    }
    input UpdateClass {
        id: ID!
        trainingSession: UpdateTrainingSession
    }
`
export const ClassQuery = `
    classes: [Class]
    classOne: Class 
`
export const ClassMutation = `
    addClass(classInput: CreateClass!): Class
    updateClass(classInput: UpdateClass!): Class
    deleteClass(id: ID!): Boolean
`