const { Student, Campus } = require('../database/models');

const students = require('../data/students');
const campuses = require('../data/campuses');

const populateStudentsTable = async (students) =>{
  for(let i = 0; i < students.length; i++){
    let currentStudent = students[i];
    let saveStudent = await Student.create(currentStudent);
    //saves currentStudent into the database
  }
}

const populateCampusesTable = async (campuses) =>{
  for(let i = 0; i < campuses.length; i++){
    let currentCampus = campuses[i];
    let saveCampus = await Campus.create(currentCampus);
  }
}

const seedDatabase = async () => {
  // await Promise.all([
  //   Student.create({
  //     firstName: "Kyrie",
  //     lastName: "Irving",
  //     gpa: 4.0,
  //     image: "www.google.com",
  //     email: "asd",
  //     studentCampus: "hunter"

  //   }),
  //  ]);
  try {
    await populateStudentsTable(students);
    await populateCampusesTable(campuses);
    console.log("Successfully seeded");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }

}

module.exports = seedDatabase;
