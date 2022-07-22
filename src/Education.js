const Education = (schoolName, degree) => {
  const education = {};

  education.schoolName = schoolName;
  education.degree = degree;
  education.graduationDate = new Date();
  education.setGraduationDate = (date) => {
    education.graduationDate = date;
  };

  return education;
};

export default Education;
