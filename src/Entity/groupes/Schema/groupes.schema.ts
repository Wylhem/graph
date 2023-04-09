export const GroupesSchema: string = `
    type Group {
        id: ID
        label: String
        createdAt: Date
        updatedAt: Date
        classes: Class
        lessons: [Lesson]
        student: [Student]
    }
    
    input CreateGroup {
        label: String!
        classes: UpdateClass
    }
    
    input UpdateGroup {
        id: ID!
        label: String
        classes: UpdateClass
    }
`
export const GroupQuery = `
    groups: [Group]
    group(id: ID!): Group
`
export const GroupMutation = `
    addGroup(group: CreateGroup): Group
    addStudentsGroup(id: ID!, students: [UpdateStudent]!):Group
    deleteStudentsGroup(id: ID! students: [UpdateStudent]!):Group
    updateGroup(group: UpdateGroup): Group
    deleteGroup(id: ID!): Boolean
    
`