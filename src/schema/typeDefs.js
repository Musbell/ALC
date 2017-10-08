// define types
const typeDefs = `

type Student {
  id: ID!
  lastName: String!
  firstName: String!
  otherNames: String!
  gender: String!
  dateOfBirth: String!
  nationality: String!
  sessionOfAdmission: String!
  dateOfAdmission: String!
  stateOfOrigin: String!
  religion: String!
  address: String!
  city: String!
  state: String!
  email: String
  phone: String
}

type Query {
  allStudents: [Student!]!
}

type Mutation {
  createStudent(
    lastName: String!,
    firstName: String!,
    otherNames: String!,
    gender: String!,
    dateOfBirth: String!,
    nationality: String!
    sessionOfAdmission: String!
    dateOfAdmission: String!
    stateOfOrigin: String!
    religion: String!
    address: String!
    city: String!
    state: String!
    email: String
    phone: String
  ): Student
}
`
module.exports = typeDefs
