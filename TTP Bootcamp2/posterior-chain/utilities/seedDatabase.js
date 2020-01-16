const { Student } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      gpa: 4.0,
      image: "www.google.com",
      email: "asd",
      studentCampus: "hunter"

    }),
 
  ]);
}

module.exports = seedDatabase;
