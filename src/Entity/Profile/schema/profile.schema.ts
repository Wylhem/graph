export const ProfileSchema: string = `
    type Profile {
        id: ID
        label: String
        createdAt: Date
        updatedAt: Date
    }
    
    input CreateProfile {
        label: String      
    }
    
    input UpdateProfile {
        id: ID!
        label: String
    }
`

export const ProfileQuery: string = `
    profiles: [Profile]
    profile(id: ID!): Profile 
`

export const ProfileMutation: string = `
    addProfile(profile: CreateProfile): Profile
    updateProfile(profile: UpdateProfile): Profile
    deleteProfile(id: ID!): Profile
`