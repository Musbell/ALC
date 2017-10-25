import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql';

import studentType from './studentType'
import student from './studentSchema'

export default {
  students: {
    type: new GraphQLList(studentType),
    resolve: student.getListOfStudents
  },
  student: {
    type: studentType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: student.getUserByPosition
  },
  studentId: {
    type: studentType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: student.getUserById
  }
};
