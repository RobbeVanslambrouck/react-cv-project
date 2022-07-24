const Education = (id) => {
  const education = {};

  education.id = id;
  education.schoolName = "";
  education.degree = "";
  education.graduationDate = new Date();

  education.setSchoolName = (name) => {
    education.schoolName = name;
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
