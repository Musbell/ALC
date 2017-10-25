import gql from 'graphql-tag'

export const STUDENT_QUERY = gql`
  query StudentQuery($id: ID!) {
    Student(id: $id) {
      id
      lastName
      firstName
      otherName
      gender
      dateOfBirth
      nationality
      sessionOfAdmission
      dateOfAdmission
      stateOfOrigin
      religion
      address
      city
      state
      email
      phone

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
export const CREATE_STUDENT_MUTATION = gql`
  # 2
  mutation CreateStudentMutation(
  $lastName: String!,
  $firstName: String!,
  $otherName: String!,
  $gender: String!,
  $dateOfBirth: String!,
  $nationality: String!,
  $sessionOfAdmission: String!,
  $dateOfAdmission: String!,
  $stateOfOrigin: String!,
  $religion: String!,
  $address: String!,
  $city: String!,
  $state: String!,
  $email: String!,
  $phone: String!
  ) {
    createStudent(
      lastName: $lastName,
      firstName: $firstName,
      otherName: $otherName,
      gender:$gender,
      dateOfBirth:$dateOfBirth,
      nationality:$nationality,
      sessionOfAdmission:$sessionOfAdmission,
      dateOfAdmission:$dateOfAdmission,
      stateOfOrigin:$stateOfOrigin,
      religion:$religion,
      address:$address,
      city:$city,
      state:$state,
      email:$email,
      phone:$phone
    ) {
      id
    }
  }
`

export const ALL_STUDENTS_SEARCH_QUERY = gql`
  query AllStudentsSearchQuery($searchText: String!) {
    allStudents(filter: {
      OR: [{
        firstName_contains: $searchText
      }, {
        lastName_contains: $searchText
      },
      ]
    }) {
      id
      firstName
      lastName
      dateOfAdmission
      sessionOfAdmission
    }
  }
`
