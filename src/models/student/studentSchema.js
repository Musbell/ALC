import mongoose from 'mongoose';

var studentSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  lastName: String,
  firstName: String,
  otherName: String,
  gender: String,
  dateOfBirth: String,
  nationality: String,
  sessionOfAdmission: String,
  dateOfAdmission: String,
  stateOfOrigin: String,
  religion: String,
  address: String,
  city: String,
  state: String,
  email: String,
phone: String,
  type: String
});

let student = mongoose.model('student', studentSchema);

module.exports = student;

module.exports.getListOfStudents = () => {
  return new Promise((resolve, reject) => {
    student.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getStudentById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    student.findOne({
      id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getStudentByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    student.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.addStudent = (root, {
  lastName,
  firstName,
  otherName,
  gender,
  dateOfBirth,
  nationality,
  sessionOfAdmission,
  dateOfAdmission,
  stateOfOrigin,
  religion,
  address,
  city,
  state,
  email,
  phone
}) => {
  var newStudent = new student({
    lastName: lastName,
    firstName: firstName,
    otherName: otherName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    sessionOfAdmission: sessionOfAdmission,
    dateOfAdmission: dateOfAdmission,
    stateOfOrigin: stateOfOrigin,
    religion: religion,
    address: address,
    city: city,
    state: state,
    email: email,
    phone: phone,
  });

  return new Promise((resolve, reject) => {
    newStudent.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updateStudent = (root, {lastName,
  firstName,
  otherName,
  gender,
  dateOfBirth,
  nationality,
  sessionOfAdmission,
  dateOfAdmission,
  stateOfOrigin,
  religion,
  address,
  city,
  state,
  email,
  phone}) => {
  var updateUser = { lastName: lastName,
    firstName: firstName,
    otherName: otherName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    sessionOfAdmission: sessionOfAdmission,
    dateOfAdmission: dateOfAdmission,
    stateOfOrigin: stateOfOrigin,
    religion: religion,
    address: address,
    city: city,
    state: state,
    email: email,
    phone: phone
  };
  return new Promise((resolve, reject) => {
    user.findOneAndUpdate(
      { id: id },
      { $set: updateStudent },
      { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}
