export const PersonSchema: string = `
    type Person {
        id: ID
        firstname: String
        lastname: String
        createdAt: Date
        updatedAt: Date
    }
    
    input CreatePerson {
        firstname: String
        lastname: String      
    }
    
    input UpdatePerson {
        id: ID!
        firstname: String
        lastname: String      
    }
`

export const PersonQuery: string = `
    persons: [Person]
    person(id: ID!): Person 
`
export const PersonMutation: string = `
    addPerson(person: CreatePerson): Person
    updatePerson(person: UpdatePerson): Person
    deletePerson(id: ID!): Boolean 
`