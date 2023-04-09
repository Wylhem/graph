export const EstablishmentSchema: string = `
    type Establishment {
        id: ID
        publicName: String
        name: String
        address: String
        classrooms: [Classroom]
        parentSite: Establishment
        childSites: [Establishment]
        trainings: [Training]
        createdAt: Date
        updatedAt: Date
    }
    
    input UpdateEstablishment {
        id: ID!
        name: String
        address: String
        publicName: String
    }   
    input CreateEstablishment {
        publicName: String
        name: String
        address: String
    }
`

export const EstablishmentQuery: string = `
    establishments: [Establishment]
    establishment: Establishment
`
export const EstablishmentMutation: string = `
    addEstablishment(establishment: CreateEstablishment): Establishment
    connectParentSite(id:ID!, parentSite: Int): Establishment
    updateEstablishment(establishment: UpdateEstablishment):Establishment
    deleteEstablishment(id: ID!): Boolean
`