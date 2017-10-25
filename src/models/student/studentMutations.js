import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql';

import studentType from './studentType';
import student from './studentSchema';

export default {
  addStudent:{
    type:studentType,
    args: {
      lastName: {
        name: 'lastName',
        type: new GraphQLNonNull(GraphQLString)
      },
      firstName: {
        name: 'firstName',
        type: new GraphQLNonNull(GraphQLString)
      },
      otherName: {
        name: 'otherName',
        type: new GraphQLNonNull(GraphQLString)
      },
      gender: {
        name: 'gender',
        type: new GraphQLNonNull(GraphQLString)
      },
      dateOfBirth: {
        name: 'dateOfBirth',
        type: new GraphQLNonNull(GraphQLString)
      },
      nationality: {
        name: 'nationality',
        type: new GraphQLNonNull(GraphQLString)
      },
      sessionOfAdmission: {
        name: 'sessionOfAdmission',
        type: new GraphQLNonNull(GraphQLString)
      },
      dateOfAdmission: {
        name: 'dateOfAdmission',
        type: new GraphQLNonNull(GraphQLString)
      },
      stateOfOrigin: {
        name: 'stateOfOrigin',
        type: new GraphQLNonNull(GraphQLString)
      },
      religion: {
        name: 'religion',
        type: new GraphQLNonNull(GraphQLString)
      },
      address: {
        name: 'address',
        type: new GraphQLNonNull(GraphQLString)
      },
      city: {
        name: 'city',
        type: new GraphQLNonNull(GraphQLString)
      },
      state: {
        name: 'state',
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        name: 'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      phone: {
        name: 'phone',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: student.addStudent
  },
  updateStudent:{
    type:studentType,
    args: {
      id:{
        type: GraphQLID
      },
      lastName: {
        name: 'lastName',
        type: new GraphQLNonNull(GraphQLString)
      },
      firstName: {
        name: 'firstName',
        type: new GraphQLNonNull(GraphQLString)
      },
      otherName: {
        name: 'otherName',
        type: new GraphQLNonNull(GraphQLString)
      },
      gender: {
        name: 'gender',
        type: new GraphQLNonNull(GraphQLString)
      },
      dateOfBirth: {
        name: 'dateOfBirth',
        type: new GraphQLNonNull(GraphQLString)
      },
      nationality: {
        name: 'nationality',
        type: new GraphQLNonNull(GraphQLString)
      },
      sessionOfAdmission: {
        name: 'sessionOfAdmission',
        type: new GraphQLNonNull(GraphQLString)
      },
      dateOfAdmission: {
        name: 'dateOfAdmission',
        type: new GraphQLNonNull(GraphQLString)
      },
      stateOfOrigin: {
        name: 'stateOfOrigin',
        type: new GraphQLNonNull(GraphQLString)
      },
      religion: {
        name: 'religion',
        type: new GraphQLNonNull(GraphQLString)
      },
      address: {
        name: 'address',
        type: new GraphQLNonNull(GraphQLString)
      },
      city: {
        name: 'city',
        type: new GraphQLNonNull(GraphQLString)
      },
      state: {
        name: 'state',
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        name: 'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      phone: {
        name: 'phone',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: student.updateStudent
  }
};
