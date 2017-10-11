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
  allStudents(filter: StudentFilter, skip: Int, first: Int): [Student!]!
}
input StudentFilter {
  OR: [StudentFilter!]
  lastName_contains: String
    firstName_contains: String
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
  
  createUser(name: String!, authProvider: AuthProviderSignupData!): User
  signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayload!
  }
  
  type User {
    id: ID!
    name: String!
    email: String
}

input AuthProviderSignupData {
    email: AUTH_PROVIDER_EMAIL
}

input AUTH_PROVIDER_EMAIL {
    email: String!
    password: String!
}

type SigninPayload {
    token: String
    user: User
}

type Subscription {
   Student(filter: StudentSubscriptionFilter): StudentSubscriptionPayload
}

input StudentSubscriptionFilter {
   mutation_in: [_ModelMutationType!]
}

type StudentSubscriptionPayload {
   mutation: _ModelMutationType!
   node: Student
}

enum _ModelMutationType {
  CREATED
  UPDATED
  DELETED
}
`
module.exports = typeDefs
