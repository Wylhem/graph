export const ProfessorSchema: string = `
    type Professor {
        id: ID
        createdAt: Date
        updateAt: Date
        person: Person
    }
    input CreateProfessor {
        person: UpdatePerson!
    }
    input UpdateProfessor {
        id: ID!
        person: UpdatePerson
    }
`
export const ProfessorQuery: string = `
    professors: [Professor]
    professor(id: ID!): Professor
`
export const ProfessorMutation: string = `
    addProfessor(professor: CreateProfessor): Professor
    updateProfessor(professor: UpdateProfessor): Professor
    deleteProfessor(id: ID!): Boolean
`