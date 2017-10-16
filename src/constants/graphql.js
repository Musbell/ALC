import gql from 'graphql-tag'

export const ALL_STUDENTS_QUERY = gql`
  query AllStudentsQuery {
    allStudents {
      id
      firstName
      lastName
    }
  }
`
