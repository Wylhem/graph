export const AbsenceSchema = `
    type Absence {
        id: ID
        student: Student
        lesson: Lesson
        createdAt: Date
        updatedAt: Date
    }
    
    input CreateAbsence {
        student: UpdateStudent!
        lesson: UpdateLesson!
    }
    
    input UpdateAbsence {
        id: ID!
        student: UpdateStudent
        lesson: UpdateLesson
    }
`

export const AbsenceQuery = `
    absences: [Absence]
    absence(id: ID!): Absence 
`
export const AbsenceMutation = `
    addAbsence(absence: CreateAbsence): Absence
    updateAbsence(absence: UpdateAbsence): Absence
    deleteAbsence(id:ID!): Boolean
`
