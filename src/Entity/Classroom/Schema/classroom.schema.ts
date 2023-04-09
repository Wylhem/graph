export const ClassroomSchema = `
    type Classroom {
        id: ID
        label: String
        establishment: Establishment
        lessons: [Lesson]
        createdAt: Date
        updatedAt: Date
    }
    input CreateClassroom {
        label: String!
        establishment: UpdateEstablishment!
    }
    input UpdateClassroom {
        id: ID!
        label: String
    }
`
export const ClassroomQuery = `
    classrooms: [Classroom]
    classroom(id: ID!): Classroom
`
export const ClassroomMutation = `
    addClassroom(classroom: CreateClassroom): Classroom
    updateClassroom(classroom: UpdateClassroom): Classroom
    deleteClassroom(id: ID!): Boolean
    
`