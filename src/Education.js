const Education = (id) => {
  const education = {};

  education.id = id;
  education.school = "";
  education.location = "";
  education.degree = "";
  education.graduationDate = new Date();

  education.setSchool = (school) => {
    education.school = school;
  };

  education.setLocation = (location) => {
    education.location = location;
  };

  education.setDegree = (degree) => {
    education.degree = degree;
  };

  education.setGraduationDate = (date) => {
    education.graduationDate = date;
  };

  return education;
};

export default Education;
