export const UsersSchema = `
    type User {
        id: ID
        email: String
        createdAt: Date
        updatedAt: Date
        person: Person
        profile: Profile
    }
    input CreateUser {
        email: String!
        person: UpdatePerson
        profile: UpdatePerson
    }
    input UpdateUser {
        id: ID!
        email: String
        person: UpdatePerson
        profile: UpdatePerson
    }
`
export const UsersQuery: string = `
    users: [User]
    user(id: ID!): User
`

export const UsersMutation: string = `
    addUsers(user: CreateUser): User
    updateUsers(user: UpdateUser): User
    deleteUsers(id: ID!): Boolean
`