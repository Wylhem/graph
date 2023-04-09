export const StudentSchema: string = `
    type Student {
        id: ID
        isInEu: Boolean
        disability: Boolean
        scholarship: Boolean
        createdAt: Date
        updatedAt: Date
        person: Person
        groupes: Group
        exams: [Exam]
        absence: [Absence]
        average: Float
    }
    
    input CreateStudent {
        isInEu: Boolean
        disability: Boolean
        scholarship: Boolean
        person: UpdatePerson!
    }
    
    input UpdateStudent {
         id: ID!
         isInEu: Boolean
         disability: Boolean
         scholarship: Boolean
         person: UpdatePerson
    }
`

export const StudentQuery: string = `
    students: [Student]
    student(id: ID!): Student
    average(id: ID!): Student
`
export const StudentMutation: string = `
    addStudent(student:CreateStudent): Student
    updateStudent(student: UpdateStudent): Student
    deleteStudent(id: ID!): Boolean
`