import gql from 'graphql-tag'

export const ALL_STUDENTS_QUERY = gql`
  query AllStudentsQuery {
    allStudents {
      id
      firstName
      lastName
      dateOfAdmission
      sessionOfAdmission
      
    }
  }
`


export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`
